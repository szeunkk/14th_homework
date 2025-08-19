let image__list ;

/* 강아지 사진 불러오는 함수 */
const addImageCard = () => {
    fetch("https://dog.ceo/api/breeds/image/random/10").then((result) => {
        result.json().then((resultJSON) => {
            console.log(resultJSON)
            
            const imageURL = resultJSON.message
            
            image__list = imageURL.map(el => `
            <img src="${el}"/>
            `).join("")
        })
    })
}

const image__filter = `
    <input type="checkbox" />
    <ul>
        <li>기본</li>
        <li>가로형</li>
        <li>세로형</li>
    </ul>
`