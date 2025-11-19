"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";

interface Comment {
  id: string;
  username: string;
  content: string;
  timeAgo: string;
  rating: number;
}

const MOCK_DATA = {
  images: [
    "https://picsum.photos/seed/ootd1/654/900",
    "https://picsum.photos/seed/ootd2/654/900",
    "https://picsum.photos/seed/ootd3/654/900",
  ],
  username: "@페미닌걸",
  description: "오늘의 데일리룩 공유합니다! 날씨가 좋아서 밖에 나가고 싶네요 ✨",
  date: "2024.12.15",
  likes: 178,
  comments: [
    {
      id: "1",
      username: "@패션러버",
      content: "스타일링 너무 멋있어요! 상의 정보 알 수 있을까요?",
      timeAgo: "2시간 전",
      rating: 4,
    },
    {
      id: "2",
      username: "@스타일리스트",
      content: "컬러 조합이 정말 센스있네요 👍",
      timeAgo: "3시간 전",
      rating: 3,
    },
    {
      id: "3",
      username: "@옷장지기",
      content: "어디서 구매하셨나요? 너무 이쁘네요!",
      timeAgo: "5시간 전",
      rating: 4,
    },
    {
      id: "4",
      username: "@데일리룩",
      content: "저도 이런 스타일 도전해보고 싶어요",
      timeAgo: "7시간 전",
      rating: 5,
    },
    {
      id: "5",
      username: "@미니멀리스트",
      content: "심플하면서도 세련된 느낌이 좋아요",
      timeAgo: "1일 전",
      rating: 3,
    },
  ],
};

export default function OOTDDetail() {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rating: 0,
    content: "",
  });

  const handleBackClick = () => {
    router.push("/fitfeed");
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? MOCK_DATA.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === MOCK_DATA.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
    setFormData({ username: "", password: "", rating: 0, content: "" });
  };

  const handleRatingClick = (rating: number) => {
    setFormData((prev) => ({ ...prev, rating }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid =
    formData.username.trim() !== "" &&
    formData.password.trim() !== "" &&
    formData.rating > 0 &&
    formData.content.trim() !== "";

  const handleSubmit = () => {
    if (isFormValid) {
      console.log("댓글 작성:", formData);
      handleModalClose();
    }
  };

  return (
    <>
      <div className={styles.wrapper}>
        <button
          className={styles.backButton}
          onClick={handleBackClick}
          data-testid="back-button"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.74992 13.8542L3.64575 8.75L8.74992 3.64584"
              stroke="#23345C"
              strokeWidth="1.45833"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.8541 8.75H3.64575"
              stroke="#23345C"
              strokeWidth="1.45833"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>목록으로 돌아가기</span>
        </button>

        <div className={styles.container}>
          <div className={styles.mainImageWrapper}>
            <button
              className={styles.prevButton}
              onClick={handlePrevImage}
              data-testid="prev-button"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className={styles.mainImage}>
              <img
                key={currentImageIndex}
                src={MOCK_DATA.images[currentImageIndex]}
                alt="OOTD 이미지"
                data-testid="main-image"
              />
            </div>
            <button
              className={styles.nextButton}
              onClick={handleNextImage}
              data-testid="next-button"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className={styles.imageIndicator}>
              {currentImageIndex + 1} / {MOCK_DATA.images.length}
            </div>
          </div>

          <div className={styles.rightSection}>
            <div className={styles.userSection}>
              <div className={styles.avatar}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="9" cy="9" r="9" fill="#23345C" fillOpacity="0.1" />
                </svg>
              </div>
              <div className={styles.userInfo}>
                <div className={styles.userText}>
                  <p className={styles.username}>{MOCK_DATA.username}</p>
                  <p className={styles.description}>{MOCK_DATA.description}</p>
                </div>
                <p className={styles.date}>{MOCK_DATA.date}</p>
              </div>
            </div>

            <div className={styles.commentsSection}>
              {MOCK_DATA.comments.map((comment) => (
                <div key={comment.id} className={styles.commentItem}>
                  <div className={styles.commentAvatar}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="7" cy="7" r="7" fill="#F8F9FC" />
                    </svg>
                  </div>
                  <div className={styles.commentContent}>
                    <div className={styles.commentText}>
                      <span className={styles.commentUsername}>
                        {comment.username}
                      </span>
                      <span className={styles.commentMessage}>
                        {comment.content}
                      </span>
                    </div>
                    <div className={styles.commentMeta}>
                      <span className={styles.commentTime}>
                        {comment.timeAgo}
                      </span>
                      <div className={styles.commentRating}>
                        {[...Array(5)].map((_, index) => (
                          <svg
                            key={index}
                            width="11"
                            height="11"
                            viewBox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            {index < comment.rating ? (
                              <path
                                d="M0.875 4.15624C0.875009 3.66939 1.0227 3.19399 1.29856 2.79284C1.57442 2.39169 1.96548 2.08365 2.42008 1.90941C2.87468 1.73517 3.37144 1.70293 3.84476 1.81694C4.31807 1.93096 4.74566 2.18586 5.07106 2.54799C5.09398 2.57249 5.12169 2.59203 5.15247 2.60539C5.18325 2.61874 5.21645 2.62564 5.25 2.62564C5.28355 2.62564 5.31675 2.61874 5.34753 2.60539C5.37831 2.59203 5.40602 2.57249 5.42894 2.54799C5.75332 2.18351 6.18101 1.92646 6.65509 1.81106C7.12917 1.69567 7.62715 1.72739 8.08276 1.90201C8.53836 2.07663 8.92998 2.38587 9.20549 2.78857C9.481 3.19127 9.62732 3.66832 9.625 4.15624C9.625 5.15811 8.96875 5.90624 8.3125 6.56249L5.90975 8.88692C5.82823 8.98055 5.72772 9.05576 5.6149 9.10756C5.50207 9.15935 5.37952 9.18655 5.25538 9.18733C5.13123 9.18812 5.00835 9.16248 4.89488 9.11212C4.7814 9.06176 4.67995 8.98783 4.59725 8.89524L2.1875 6.56249C1.53125 5.90624 0.875 5.16249 0.875 4.15624Z"
                                fill="#23345C"
                                stroke="#23345C"
                                strokeWidth="0.875"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            ) : (
                              <g clipPath="url(#clip0_9_501)">
                                <path
                                  d="M0.875 4.15624C0.875009 3.66939 1.0227 3.19399 1.29856 2.79284C1.57442 2.39169 1.96548 2.08365 2.42008 1.90941C2.87468 1.73517 3.37144 1.70293 3.84476 1.81694C4.31807 1.93096 4.74566 2.18586 5.07106 2.54799C5.09398 2.57249 5.12169 2.59203 5.15247 2.60539C5.18325 2.61874 5.21645 2.62564 5.25 2.62564C5.28355 2.62564 5.31675 2.61874 5.34753 2.60539C5.37831 2.59203 5.40602 2.57249 5.42894 2.54799C5.75332 2.18351 6.18101 1.92646 6.65509 1.81106C7.12917 1.69567 7.62715 1.72739 8.08276 1.90201C8.53836 2.07663 8.92998 2.38587 9.20549 2.78857C9.481 3.19127 9.62732 3.66832 9.625 4.15624C9.625 5.15811 8.96875 5.90624 8.3125 6.56249L5.90975 8.88692C5.82823 8.98055 5.72772 9.05576 5.6149 9.10756C5.50207 9.15935 5.37952 9.18655 5.25538 9.18733C5.13123 9.18812 5.00835 9.16248 4.89488 9.11212C4.7814 9.06176 4.67995 8.98783 4.59725 8.89524L2.1875 6.56249C1.53125 5.90624 0.875 5.16249 0.875 4.15624Z"
                                  stroke="#23345C"
                                  strokeWidth="0.875"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                            )}
                            <defs>
                              <clipPath id="clip0_9_501">
                                <rect width="10.5" height="10.5" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.actionsSection}>
              <div className={styles.actionButtons}>
                <button className={styles.actionButton} data-testid="like-button">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.75 8.31247C1.75002 7.33878 2.04539 6.38798 2.59712 5.58568C3.14884 4.78338 3.93095 4.1673 4.84016 3.81882C5.74936 3.47035 6.74289 3.40586 7.68951 3.63389C8.63613 3.86191 9.49132 4.37172 10.1421 5.09597C10.188 5.14499 10.2434 5.18406 10.3049 5.21077C10.3665 5.23749 10.4329 5.25127 10.5 5.25127C10.5671 5.25127 10.6335 5.23749 10.6951 5.21077C10.7566 5.18406 10.812 5.14499 10.8579 5.09597C11.5066 4.36701 12.362 3.85292 13.3102 3.62213C14.2583 3.39133 15.2543 3.45478 16.1655 3.80402C17.0767 4.15327 17.86 4.77174 18.411 5.57714C18.962 6.38253 19.2546 7.33664 19.25 8.31247C19.25 10.3162 17.9375 11.8125 16.625 13.125L11.8195 17.7738C11.6565 17.9611 11.4554 18.1115 11.2298 18.2151C11.0041 18.3187 10.759 18.3731 10.5108 18.3747C10.2625 18.3762 10.0167 18.325 9.78975 18.2242C9.56281 18.1235 9.3599 17.9757 9.1945 17.7905L4.375 13.125C3.0625 11.8125 1.75 10.325 1.75 8.31247Z"
                      stroke="#1C2A4A"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  className={styles.actionButton}
                  onClick={handleModalOpen}
                  data-testid="comment-button"
                >
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_11_821)">
                      <path
                        d="M2.61797 14.2992C2.74663 14.6238 2.77528 14.9794 2.70022 15.3204L1.76835 18.1991C1.73832 18.3451 1.74609 18.4963 1.7909 18.6385C1.83572 18.7806 1.9161 18.909 2.02443 19.0113C2.13276 19.1137 2.26544 19.1867 2.4099 19.2234C2.55435 19.2601 2.70579 19.2593 2.84985 19.2211L5.83622 18.3479C6.15797 18.284 6.49119 18.3119 6.79785 18.4284C8.66631 19.3009 10.7829 19.4855 12.7742 18.9496C14.7655 18.4137 16.5036 17.1917 17.6817 15.4992C18.8598 13.8067 19.4023 11.7525 19.2135 9.69896C19.0246 7.64546 18.1166 5.72464 16.6495 4.2754C15.1825 2.82616 13.2507 1.94164 11.1951 1.77789C9.1394 1.61414 7.09197 2.18169 5.41399 3.3804C3.736 4.57911 2.53531 6.33195 2.02376 8.32966C1.5122 10.3274 1.72265 12.4416 2.61797 14.2992Z"
                        stroke="#1C2A4A"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_11_821">
                        <rect width="21" height="21" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
              <p className={styles.likesCount}>좋아요 {MOCK_DATA.likes}개</p>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modalBackdrop} onClick={handleModalClose}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
            data-testid="comment-modal"
          >
            <button
              className={styles.closeButton}
              onClick={handleModalClose}
              data-testid="modal-close-button"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 4.5L4.5 13.5"
                  stroke="#1C2A4A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.5 4.5L13.5 13.5"
                  stroke="#1C2A4A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className={styles.modalBody}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>
                    작성자명<span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="이름을 입력해 주세요."
                    value={formData.username}
                    onChange={handleInputChange}
                    data-testid="username-input"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>
                    비밀번호<span className={styles.required}>*</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="비밀번호를 입력해 주세요."
                    value={formData.password}
                    onChange={handleInputChange}
                    data-testid="password-input"
                  />
                </div>
              </div>
              <div className={styles.ratingGroup}>
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    type="button"
                    className={styles.ratingButton}
                    onClick={() => handleRatingClick(rating)}
                    data-testid={`rating-${rating}`}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 8.8352C2.00002 7.65804 2.33759 6.50857 2.96813 5.53862C3.59867 4.56867 4.49251 3.82386 5.5316 3.40256C6.57069 2.98127 7.70614 2.90331 8.78799 3.17898C9.86984 3.45466 10.8472 4.07099 11.591 4.94658C11.6434 5.00584 11.7067 5.05308 11.777 5.08537C11.8474 5.11767 11.9233 5.13433 12 5.13433C12.0767 5.13433 12.1525 5.11767 12.2229 5.08537C12.2932 5.05308 12.3566 5.00584 12.409 4.94658C13.1504 4.0653 14.128 3.44379 15.2116 3.16476C16.2952 2.88574 17.4334 2.96245 18.4748 3.38467C19.5162 3.80689 20.4113 4.5546 21.0411 5.52829C21.6708 6.50198 22.0052 7.65545 21.9999 8.8352C21.9999 11.2576 20.4999 13.0665 18.9999 14.6533L13.508 20.2736C13.3216 20.5 13.0919 20.6818 12.834 20.8071C12.5761 20.9323 12.296 20.9981 12.0123 21C11.7285 21.0019 11.4476 20.9399 11.1883 20.8181C10.9289 20.6963 10.697 20.5176 10.508 20.2937L4.99999 14.6533C3.5 13.0665 2 11.2682 2 8.8352Z"
                        fill={formData.rating >= rating ? "#23345C" : "none"}
                        stroke="#23345C"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                ))}
              </div>
              <div className={styles.formGroupFull}>
                <textarea
                  name="content"
                  placeholder="댓글을 입력해 주세요."
                  value={formData.content}
                  onChange={handleInputChange}
                  rows={5}
                  data-testid="content-textarea"
                />
              </div>
              <div className={styles.modalActions}>
                <button
                  type="button"
                  className={styles.cancelButton}
                  onClick={handleModalClose}
                  data-testid="cancel-button"
                >
                  취소
                </button>
                <button
                  type="button"
                  className={`${styles.submitButton} ${
                    isFormValid ? styles.active : ""
                  }`}
                  onClick={handleSubmit}
                  disabled={!isFormValid}
                  data-testid="submit-button"
                >
                  등록하기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

