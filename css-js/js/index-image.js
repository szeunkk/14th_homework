let image__list ;

fetch("https://dog.ceo/api/breeds/image/random/10").then((result) => {
    result.json().then((resultJSON) => {
        console.log(resultJSON)
        
        const imageURL = resultJSON.message
        
        image__list = imageURL.map(el => `
        <img src="${el}"/>
        `).join("")
    })
})