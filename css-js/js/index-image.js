let image__list ;

/* 강아지 사진 불러오는 함수 */
const addImageCard = () => {
    fetch("https://dog.ceo/api/breeds/image/random/10").then((result) => {
        result.json().then((resultJSON) => {
            console.log(resultJSON)
            
            const imageURL = resultJSON.message
            
            image__list = imageURL.map(el => `
            <img id="dog__image" class="dog__image ratio__basic" src="${el}"/>
            `).join("")
        })
    })
}

const image__filter = `
    <div class="dropdown__group">
        <input type="checkbox" id="dropdown__title" class="dropdown__title"/>
        <ul class="dropdown__list">
            <li>
                <input type="radio" id="기본" name="dropdown" onclick="selectDropDown(event);imageRatio(event);"/>
                <label for="기본">기본</label>
            </li>
            <li>
                <input type="radio" id="가로형" name="dropdown" onclick="selectDropDown(event);imageRatio(event);"/>
                <label for="가로형">가로형</label>
            </li>
            <li>
                <input type="radio" id="세로형" name="dropdown" onclick="selectDropDown(event);imageRatio(event);"/>
                <label for="세로형">세로형</label>
            </li>
        </ul>
    </div>
`