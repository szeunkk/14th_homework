"use client";

import { useRouter } from "next/navigation";
import styles from "./styles.module.css";
import { useFetchTravelproducts } from "./hook";
import InfiniteScroll from "react-infinite-scroll-component";

// Mock 데이터 타입
interface Product {
  id: number;
  image: string;
  badge: string;
  likes: number;
  comments: number;
  title: string;
  price: number;
  travelproductAddress: string[];
  createdAt: string;
}

// 가격 포맷 함수
const formatPrice = (price: number): string => {
  return price.toLocaleString("ko-KR") + "원";
};

// 시간 경과 표시 함수
const getTimeAgo = (dateString: string): string => {
  const now = new Date();
  const createdDate = new Date(dateString);
  const diffInMs = now.getTime() - createdDate.getTime();

  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const diffInMonths = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 30));
  const diffInYears = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 365));

  if (diffInMinutes < 1) {
    return "방금 전";
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes}분 전`;
  } else if (diffInHours < 24) {
    return `${diffInHours}시간 전`;
  } else if (diffInDays < 30) {
    return `${diffInDays}일 전`;
  } else if (diffInMonths < 12) {
    return `${diffInMonths}개월 전`;
  } else {
    return `${diffInYears}년 전`;
  }
};

export default function ProductsList() {
  const router = useRouter();
  const { data, loading, error, onNext, hasMore } = useFetchTravelproducts();

  const handleProductClick = (productId: string) => {
    router.push(`/remarket/${productId}`);
  };

  return (
    <div className={styles.productCatalogue}>
      <div className={styles.header}>
        <h1 className={styles.title}>전체 상품(12)</h1>
      </div>

      <InfiniteScroll
        next={onNext}
        hasMore={hasMore}
        loader={<div>로딩중입니다</div>}
        dataLength={data?.fetchTravelproducts.length ?? 0}
        scrollableTarget="스크롤대상태그ID"
      >
        <div className={styles.container}>
          {data?.fetchTravelproducts.map((product) => (
            <div
              key={product._id}
              className={styles.card}
              onClick={() => handleProductClick(product._id)}
              style={{ cursor: "pointer" }}
            >
              <div className={styles.cardContent}>
                <div className={styles.imageWrapper}>
                  <div
                    className={styles.image}
                    style={{
                      backgroundImage: !product.images[0]
                        ? "url(images/accommodation_1.png)"
                        : `url(https://storage.googleapis.com/${product.images[0].replace(/ /g, "%20")})`,
                    }}
                  />
                  {product.tags[0] && <div className={styles.badge}>{product.tags[0]}</div>}
                  <div className={styles.actions}>
                    <div className={styles.commentButton}>
                      <span className={styles.commentCount}>{product.pickedCount}</span>
                    </div>
                    <button className={styles.bookmarkButton} aria-label="북마크">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.0833 12.25L6.99999 9.91667L2.91666 12.25V2.91667C2.91666 2.60725 3.03957 2.3105 3.25837 2.09171C3.47716 1.87292 3.7739 1.75 4.08332 1.75H9.91666C10.2261 1.75 10.5228 1.87292 10.7416 2.09171C10.9604 2.3105 11.0833 2.60725 11.0833 2.91667V12.25Z"
                          stroke="white"
                          strokeWidth="1.16667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className={styles.info}>
                  <h3 className={styles.productTitle}>{product.name}</h3>
                  <p className={styles.price}>{formatPrice(product.price)}</p>
                  <div className={styles.meta}>
                    <div className={styles.location}>
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.75 4.375C8.75 6.55944 6.32669 8.83444 5.51294 9.53706C5.43713 9.59407 5.34485 9.62489 5.25 9.62489C5.15515 9.62489 5.06287 9.59407 4.98706 9.53706C4.17331 8.83444 1.75 6.55944 1.75 4.375C1.75 3.44674 2.11875 2.5565 2.77513 1.90013C3.4315 1.24375 4.32174 0.875 5.25 0.875C6.17826 0.875 7.0685 1.24375 7.72487 1.90013C8.38125 2.5565 8.75 3.44674 8.75 4.375Z"
                          stroke="#23345C"
                          strokeWidth="0.875"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.25 5.6875C5.97487 5.6875 6.5625 5.09987 6.5625 4.375C6.5625 3.65013 5.97487 3.0625 5.25 3.0625C4.52513 3.0625 3.9375 3.65013 3.9375 4.375C3.9375 5.09987 4.52513 5.6875 5.25 5.6875Z"
                          stroke="#23345C"
                          strokeWidth="0.875"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{product.travelproductAddress?.address}</span>
                    </div>
                    <span className={styles.time}>{getTimeAgo(product.createdAt)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
