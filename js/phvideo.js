
const dataLode = async () => {
    const res = await fetch (`https://openapi.programming-hero.com/api/videos/categories`)
    const data = await res.json()
    const cardData = data.data; 
    console.log (cardData)


    const manue = document.getElementById ('manu')
    cardData.forEach(element => {
        console.log (element)

        const div = document.createElement ('div')
        div.innerHTML = `
        <h1> ${element.category}</h1>
        `
        manue.appendChild (div)
    });
}

dataLode ()