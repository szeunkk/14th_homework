"use client";

import { useState } from "react";
import { Button } from "@commons/ui/src/button";
import styles from "./styles.module.css";
import Image from "next/image";

interface Product {
  id: string;
  title: string;
  description: string;
  tags: string;
  seller: string;
  price: string;
  bookmarkCount: number;
  imageUrl: string;
}

const categories = [
  { icon: "/icons/Single person accommodation.svg", label: "1인 전용" },
  { icon: "/icons/apartment.svg", label: "아파트" },
  { icon: "/icons/hotel.svg", label: "호텔" },
  { icon: "/icons/camp.svg", label: "캠핑" },
  { icon: "/icons/room service.svg", label: "룸 서비스 가능" },
  { icon: "/icons/fire.svg", label: "불멍" },
  { icon: "/icons/spa.svg", label: "반신욕&스파" },
  { icon: "/icons/house on the sea.svg", label: "바다 위 숙소" },
  { icon: "/icons/planterior.svg", label: "플랜테리어" },
];

const mockProducts: Product[] = [
  {
    id: "1",
    title: "살어리 살어리랏다 쳥산(靑山)애 살어리랏다멀위랑 ᄃᆞ래랑 먹고 쳥산(靑山)애 살어리랏다얄리얄리 얄랑셩 얄라리 얄라 우러라 우러라 새여 자고 니러 우러라 새여 널라와 시름 한 나도 자고 니러 우니로라 얄리얄리 얄라셩 얄라리 얄라",
    description:
      "살어리 살어리랏다 쳥산(靑山)애 살어리랏다멀위랑 ᄃᆞ래랑 먹고 쳥산(靑山)애 살어리랏다얄리얄리 얄랑셩 얄라리 얄라 우러라 우러라 새여 자고 니러 우러라 새여 널라와 시름 한 나도 자고 니러 우니로라 얄리얄리 얄라셩 얄라리 얄라",
    tags: "#6인 이하 #건식 사우나 #애견동반 가능",
    seller: "빈얀트리",
    price: "32,900",
    bookmarkCount: 24,
    imageUrl: "/images/accommodation_1.png",
  },
  {
    id: "2",
    title: "살어리 살어리랏다 쳥산(靑山)애 살어리랏다멀위랑 ᄃᆞ래랑 먹고 쳥산(靑山)애 살어리랏다얄리얄리 얄랑셩 얄라리 얄라 우러라 우러라 새여 자고 니러 우러라 새여 널라와 시름 한 나도 자고 니러 우니로라 얄리얄리 얄라셩 얄라리 얄라",
    description:
      "살어리 살어리랏다 쳥산(靑山)애 살어리랏다멀위랑 ᄃᆞ래랑 먹고 쳥산(靑山)애 살어리랏다얄리얄리 얄랑셩 얄라리 얄라 우러라 우러라 새여 자고 니러 우러라 새여 널라와 시름 한 나도 자고 니러 우니로라 얄리얄리 얄라셩 얄라리 얄라",
    tags: "#6인 이하 #건식 사우나 #애견동반 가능",
    seller: "빈얀트리",
    price: "32,900",
    bookmarkCount: 24,
    imageUrl: "/images/accommodation_1.png",
  },
  {
    id: "3",
    title: "살어리 살어리랏다 쳥산(靑山)애 살어리랏다멀위랑 ᄃᆞ래랑 먹고 쳥산(靑山)애 살어리랏다얄리얄리 얄랑셩 얄라리 얄라 우러라 우러라 새여 자고 니러 우러라 새여 널라와 시름 한 나도 자고 니러 우니로라 얄리얄리 얄라셩 얄라리 얄라",
    description:
      "살어리 살어리랏다 쳥산(靑山)애 살어리랏다멀위랑 ᄃᆞ래랑 먹고 쳥산(靑山)애 살어리랏다얄리얄리 얄랑셩 얄라리 얄라 우러라 우러라 새여 자고 니러 우러라 새여 널라와 시름 한 나도 자고 니러 우니로라 얄리얄리 얄라셩 얄라리 얄라",
    tags: "#6인 이하 #건식 사우나 #애견동반 가능",
    seller: "빈얀트리",
    price: "32,900",
    bookmarkCount: 24,
    imageUrl: "/images/accommodation_1.png",
  },
  {
    id: "4",
    title: "살어리 살어리랏다 쳥산(靑山)애 살어리랏다멀위랑 ᄃᆞ래랑 먹고 쳥산(靑山)애 살어리랏다얄리얄리 얄랑셩 얄라리 얄라 우러라 우러라 새여 자고 니러 우러라 새여 널라와 시름 한 나도 자고 니러 우니로라 얄리얄리 얄라셩 얄라리 얄라",
    description:
      "살어리 살어리랏다 쳥산(靑山)애 살어리랏다멀위랑 ᄃᆞ래랑 먹고 쳥산(靑山)애 살어리랏다얄리얄리 얄랑셩 얄라리 얄라 우러라 우러라 새여 자고 니러 우러라 새여 널라와 시름 한 나도 자고 니러 우니로라 얄리얄리 얄라셩 얄라리 얄라",
    tags: "#6인 이하 #건식 사우나 #애견동반 가능",
    seller: "빈얀트리",
    price: "32,900",
    bookmarkCount: 24,
    imageUrl: "/images/accommodation_1.png",
  },
  {
    id: "5",
    title: "살어리 살어리랏다 쳥산(靑山)애 살어리랏다멀위랑 ᄃᆞ래랑 먹고 쳥산(靑山)애 살어리랏다얄리얄리 얄랑셩 얄라리 얄라 우러라 우러라 새여 자고 니러 우러라 새여 널라와 시름 한 나도 자고 니러 우니로라 얄리얄리 얄라셩 얄라리 얄라",
    description:
      "살어리 살어리랏다 쳥산(靑山)애 살어리랏다멀위랑 ᄃᆞ래랑 먹고 쳥산(靑山)애 살어리랏다얄리얄리 얄랑셩 얄라리 얄라 우러라 우러라 새여 자고 니러 우러라 새여 널라와 시름 한 나도 자고 니러 우니로라 얄리얄리 얄라셩 얄라리 얄라",
    tags: "#6인 이하 #건식 사우나 #애견동반 가능",
    seller: "빈얀트리",
    price: "32,900",
    bookmarkCount: 24,
    imageUrl: "/images/accommodation_1.png",
  },
  {
    id: "6",
    title: "살어리 살어리랏다 쳥산(靑山)애 살어리랏다멀위랑 ᄃᆞ래랑 먹고 쳥산(靑山)애 살어리랏다얄리얄리 얄랑셩 얄라리 얄라 우러라 우러라 새여 자고 니러 우러라 새여 널라와 시름 한 나도 자고 니러 우니로라 얄리얄리 얄라셩 얄라리 얄라",
    description:
      "살어리 살어리랏다 쳥산(靑山)애 살어리랏다멀위랑 ᄃᆞ래랑 먹고 쳥산(靑山)애 살어리랏다얄리얄리 얄랑셩 얄라리 얄라 우러라 우러라 새여 자고 니러 우러라 새여 널라와 시름 한 나도 자고 니러 우니로라 얄리얄리 얄라셩 얄라리 얄라",
    tags: "#6인 이하 #건식 사우나 #애견동반 가능",
    seller: "빈얀트리",
    price: "32,900",
    bookmarkCount: 24,
    imageUrl: "/images/accommodation_1.png",
  },
  {
    id: "7",
    title: "살어리 살어리랏다 쳥산(靑山)애 살어리랏다멀위랑 ᄃᆞ래랑 먹고 쳥산(靑山)애 살어리랏다얄리얄리 얄랑셩 얄라리 얄라 우러라 우러라 새여 자고 니러 우러라 새여 널라와 시름 한 나도 자고 니러 우니로라 얄리얄리 얄라셩 얄라리 얄라",
    description:
      "살어리 살어리랏다 쳥산(靑山)애 살어리랏다멀위랑 ᄃᆞ래랑 먹고 쳥산(靑山)애 살어리랏다얄리얄리 얄랑셩 얄라리 얄라 우러라 우러라 새여 자고 니러 우러라 새여 널라와 시름 한 나도 자고 니러 우니로라 얄리얄리 얄라셩 얄라리 얄라",
    tags: "#6인 이하 #건식 사우나 #애견동반 가능",
    seller: "빈얀트리",
    price: "32,900",
    bookmarkCount: 24,
    imageUrl: "/images/accommodation_1.png",
  },
  {
    id: "8",
    title: "살어리 살어리랏다 쳥산(靑山)애 살어리랏다멀위랑 ᄃᆞ래랑 먹고 쳥산(靑山)애 살어리랏다얄리얄리 얄랑셩 얄라리 얄라 우러라 우러라 새여 자고 니러 우러라 새여 널라와 시름 한 나도 자고 니러 우니로라 얄리얄리 얄라셩 얄라리 얄라",
    description:
      "살어리 살어리랏다 쳥산(靑山)애 살어리랏다멀위랑 ᄃᆞ래랑 먹고 쳥산(靑山)애 살어리랏다얄리얄리 얄랑셩 얄라리 얄라 우러라 우러라 새여 자고 니러 우러라 새여 널라와 시름 한 나도 자고 니러 우니로라 얄리얄리 얄라셩 얄라리 얄라",
    tags: "#6인 이하 #건식 사우나 #애견동반 가능",
    seller: "빈얀트리",
    price: "32,900",
    bookmarkCount: 24,
    imageUrl: "/images/accommodation_1.png",
  },
];

const closedProducts: Product[] = [
  {
    id: "9",
    title: "예약 마감된 숙소 1",
    description: "이미 예약이 완료된 숙소입니다",
    tags: "#마감 #인기 #예약완료",
    seller: "빈얀트리",
    price: "32,900",
    bookmarkCount: 10,
    imageUrl: "/images/accommodation_1.png",
  },
];

export default function ProductsList() {
  const [activeTab, setActiveTab] = useState<"available" | "closed">(
    "available"
  );
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    console.log("검색:", searchValue);
  };

  const currentProducts =
    activeTab === "available" ? mockProducts : closedProducts;

  return (
    <div className={styles.container} data-testid="products-list">
      {/* Title */}
      <h1 className={styles.title} data-testid="page-title">
        여기에서만 예약할 수 있는 숙소
      </h1>

      {/* Tabs */}
      <div className={styles.tabs} data-testid="tabs">
        <button
          className={`${styles.tab} ${activeTab === "available" ? styles.tabActive : ""}`}
          onClick={() => setActiveTab("available")}
          data-testid="tab-available"
        >
          예약 가능 숙소
        </button>
        <button
          className={`${styles.tab} ${activeTab === "closed" ? styles.tabActive : ""}`}
          onClick={() => setActiveTab("closed")}
          data-testid="tab-closed"
        >
          예약 마감 숙소
        </button>
      </div>

      {/* Search Bar Group */}
      <div className={styles.searchbarGroup} data-testid="searchbar-group">
        <div className={styles.searchbarLeft}>
          {/* Date Picker */}
          <div className={styles.datepicker} data-testid="datepicker">
            <Image
              src="/icons/calendar.svg"
              alt="calendar"
              width={24}
              height={24}
            />
            <div className={styles.dateRange}>
              <div className={styles.dateItem}>
                <span className={styles.dateText}>YYYY</span>
                <span className={styles.dateSeparator}>.</span>
                <span className={styles.dateText}>MM</span>
                <span className={styles.dateSeparator}>.</span>
                <span className={styles.dateText}>DD</span>
              </div>
              <span className={styles.dateRangeSeparator}>-</span>
              <div className={styles.dateItem}>
                <span className={styles.dateText}>YYYY</span>
                <span className={styles.dateSeparator}>.</span>
                <span className={styles.dateText}>MM</span>
                <span className={styles.dateSeparator}>.</span>
                <span className={styles.dateText}>DD</span>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className={styles.searchbar} data-testid="searchbar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              className={styles.searchIcon}
            >
              <path d="M6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L17.3 15.9C17.4833 16.0833 17.575 16.3167 17.575 16.6C17.575 16.8833 17.4833 17.1167 17.3 17.3C17.1167 17.4833 16.8833 17.575 16.6 17.575C16.3167 17.575 16.0833 17.4833 15.9 17.3L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z" />
            </svg>
            <input
              type="text"
              placeholder="제목을 검색해 주세요."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className={styles.searchInput}
              data-testid="search-input"
            />
          </div>

          <Button
            variant="CommentBtn"
            type="submit"
            onClick={handleSearch}
            data-testid="search-button"
          >
            검색
          </Button>
        </div>

        <Button variant="FormBtn" type="submit" data-testid="sell-button">
          숙박권 판매하기
        </Button>
      </div>

      {/* Products List */}
      <div className={styles.productsList} data-testid="products-list-content">
        {/* Category */}
        <div className={styles.category} data-testid="category">
          {categories.map((cat, index) => (
            <div
              key={index}
              className={styles.categoryItem}
              data-testid={`category-${index}`}
            >
              <div className={styles.categoryIcon}>
                <Image src={cat.icon} alt={cat.label} width={40} height={40} />
              </div>
              <span className={styles.categoryLabel}>{cat.label}</span>
            </div>
          ))}
        </div>

        {/* Card Area */}
        <div className={styles.cardArea} data-testid="card-area">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className={styles.card}
              data-testid={`product-card-${product.id}`}
            >
              <div className={styles.cardImage}>
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  width={296}
                  height={296}
                  className={styles.cardImagePlaceholder}
                />
                <div className={styles.bookmark}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.bookmarkIcon}
                  >
                    <path
                      d="M12 17.4615L8.03075 19.1652C7.42825 19.4229 6.85583 19.3736 6.3135 19.0173C5.77117 18.6609 5.5 18.1597 5.5 17.5135V5.30775C5.5 4.80258 5.675 4.375 6.025 4.025C6.375 3.675 6.80258 3.5 7.30775 3.5H16.6923C17.1974 3.5 17.625 3.675 17.975 4.025C18.325 4.375 18.5 4.80258 18.5 5.30775V17.5135C18.5 18.1597 18.2288 18.6609 17.6865 19.0173C17.1442 19.3736 16.5718 19.4229 15.9693 19.1652L12 17.4615ZM12 15.8L16.5673 17.7673C16.6699 17.8121 16.7677 17.8025 16.8605 17.7385C16.9535 17.6743 17 17.5878 17 17.4788V5.30775C17 5.23075 16.9679 5.16025 16.9038 5.09625C16.8398 5.03208 16.7692 5 16.6923 5H7.30775C7.23075 5 7.16025 5.03208 7.09625 5.09625C7.03208 5.16025 7 5.23075 7 5.30775V17.4788C7 17.5878 7.0465 17.6743 7.1395 17.7385C7.23233 17.8025 7.33008 17.8121 7.43275 17.7673L12 15.8ZM12 5H7H17H12Z"
                    />
                  </svg>
                  <span className={styles.bookmarkCount}>
                    {product.bookmarkCount}
                  </span>
                </div>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardInfo}>
                  <h3 className={styles.cardTitle}>{product.title}</h3>
                  <p className={styles.cardDescription}>
                    {product.description}
                  </p>
                </div>
                <div className={styles.cardDetails}>
                  <div className={styles.cardTags}>{product.tags}</div>
                  <div className={styles.cardFooter}>
                    <div className={styles.profile}>
                      <Image
                        src="/images/profile/6.svg"
                        alt="profile"
                        width={24}
                        height={24}
                        className={styles.profileImage}
                      />
                      <span className={styles.profileName}>
                        {product.seller}
                      </span>
                    </div>
                    <div className={styles.price}>
                      <span className={styles.priceAmount}>
                        {product.price}
                      </span>
                      <span className={styles.priceUnit}>원</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

