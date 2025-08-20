let image__list = `<div id=dog__list></div>`;
let dogImageURL = ''

/* 강아지 사진 불러오는 함수 */
async function addImageCard() {

    // 
    const skeleton__list = new Array(10).fill(`<div class="skeleton__background"></div>`).join("")
    document.getElementById("dog__list").innerHTML = skeleton__list

    const result = await fetch('https://dog.ceo/api/breeds/image/random/10');
    console.log(result);

    const resultJSON = await result.json();

    console.log(resultJSON);

    const imageURL = resultJSON.message;
    console.log(imageURL);

    dogImageURL = imageURL.map(el => `
    <img id="dog__image" class="dog__image" src="${el}"/>
    `).join("")

    document.getElementById("dog__list").innerHTML = dogImageURL

}


const image__filter = `
    <div class="dropdown__group">
        <img class="dropdown__img" src="./assets/icons/down_fill_light_m.svg"/>
        <input type="checkbox" id="dropdown__title" class="dropdown__title"/>
        <ul class="dropdown__list">
            <li>
                <input type="radio" id="기본" name="dropdown" onclick="selectDropDown(event);imageRatio(event);"/>
                <label for="기본">기본<img src="./assets/icons/check_outline_light_xs.svg"/></label>
            </li>
            <li>
                <input type="radio" id="가로형" name="dropdown" onclick="selectDropDown(event);imageRatio(event);"/>
                <label for="가로형">가로형<img src="./assets/icons/check_outline_light_xs.svg"/></label>
            </li>
            <li>
                <input type="radio" id="세로형" name="dropdown" onclick="selectDropDown(event);imageRatio(event);"/>
                <label for="세로형">세로형<img src="./assets/icons/check_outline_light_xs.svg"/></label>
            </li>
        </ul>
    </div>
`

async function loadImageCard(){
    const skeleton__list = new Array(10).fill(`<div class="skeleton__background"></div>`).join("")

    document.getElementById("dog__list").innerHTML = dogImageURL + skeleton__list

    const result = await fetch('https://dog.ceo/api/breeds/image/random/10');
    console.log(result);

    const resultJSON = await result.json();

    console.log(resultJSON);

    const imageURL = resultJSON.message;
    console.log(imageURL);

    dogImageURL = dogImageURL + imageURL.map(el => `
    <img id="dog__image" class="dog__image" src="${el}"/>
    `).join("")

    document.getElementById("dog__list").innerHTML = dogImageURL
}



const element = document.getElementById('dog__list');

element.addEventListener('scroll', () => {
  // 스크롤이 끝에 도달했는지 확인하는 조건
  if (element.scrollHeight - element.scrollTop === element.clientHeight) {
    console.log('스크롤이 맨 아래에 도달했습니다.');
  }
});