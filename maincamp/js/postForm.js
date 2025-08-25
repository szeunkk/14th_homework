const PostForm = () => {

    const placeholder = {
        postWriter: "작성자 명을 입력해 주세요.",
        postPassword: "비밀번호를 입력해 주세요.",
        postTitle: "제목을 입력해 주세요.",
        postContent: "내용을 입력해 주세요.",
        zipCode: "01234",
        mainAddress: "주소를 입력해 주세요.",
        detailAddress: "상세주소",
        youtubeUrl: "링크를 입력해 주세요." 
    }

    return(
        <form class="postForm">
            <div class="postForm__title">게시물 등록</div>
            <div class="postForm__writer__group">
                <div>
                    <div><label>작성자</label><span>*</span></div>
                    <input type="text" placeholder={placeholder['postWriter']}/>
                </div>
                <div>
                    <div><label>비밀번호</label><span>*</span></div>
                    <input type="password" placeholder={placeholder['postPassword']}/>
                </div>
            </div> 
            <hr />
            <div>
                <div><label>제목</label><span>*</span></div>
                <input type="text" placeholder={placeholder['postTitle']}/>
            </div>
            <hr />
            <div>
                <div><label>내용</label><span>*</span></div>
                <textarea placeholder={placeholder['postContent']}></textarea>
            </div>
            <hr />
            <div class="postForm__address__group">
                <div>
                    <label>주소</label>
                    <div class="zipCode__group">
                        <input type="text" placeholder={[placeholder['zipCode']]} />
                        <button id="form__button">우편번호 검색</button>
                    </div>
                </div>
                <input type="text" placeholder={placeholder['mainAddress']}/>
                <input type="text" placeholder={placeholder['detailAddress']}/>
            </div>
            <hr />
            <div>
                <div><label>유튜브 링크</label><span>*</span></div>
                <input type="text" placeholder={placeholder['youtubeUrl']}/>
            </div>
            <hr />
            <div class="postForm__attachments__group">
                <label>사진 첨부</label>
                <div class="image__upload__group">
                    <div class="add__image">
                        <img src="./assets/icons/add.svg" />
                        <span>클릭해서 사진 업로드</span>
                    </div>
                    <div class="add__image">
                        <img src="./assets/icons/add.svg" />
                        <span>클릭해서 사진 업로드</span>
                    </div>
                    <div class="add__image">
                        <img src="./assets/icons/add.svg" />
                        <span>클릭해서 사진 업로드</span>
                    </div>
                </div>
            </div>
            <div class="postForm__button__group">
                <button id="form__button">취소</button>
                <button id="form__submit" disabled="true">등록하기</button>
            </div>
        </form>
    )
}