const dataLode = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/categories`
  );
  const data = await res.json();
  const cardData = data.data;
  // console.log (cardData)

  const manue = document.getElementById("manu");
  cardData.forEach((element) => {
    // console.log (element)
    const div = document.createElement("div");
    div.innerHTML = `
        <h1 onclick="catagoriIDimport('${element.category_id}')" class = "font-bold bg-slate-300 py-2 px-5 rounded-md"> ${element.category}</h1>
        `;
    manue.appendChild(div);
  });
};
dataLode();

const catagoriIDimport = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${id}`
  );
  const data = await res.json();
  const cardDataId = data.data;
  // console.log (data.data)

  const cardsId = document.getElementById("cards");
  cardsId.innerText = "";
  cardDataId.forEach((element) => {
    console.log(element);
    const div = document.createElement("div");
    div.classList.add("c")
    div.innerHTML = `
        <div class="card bg-base-100 border rounded-md ">
                <div> 
                    <img src=${element.thumbnail}>
                 <div>            
                <div class="flex justify-start  mt-4">
                    <div class="h-16 w-16" >
                        <img class ="rounded-full" src=${element.authors[0].profile_picture}>
                    </div>
                    <div class =" ml-3">
                        <h2 class="font-bold">${element.title}</h2>
                        <h3>${element.authors[0].profile_name} <span><img src="" alt=""></span></h3>
                        <h4>91K views</h4>
                    </div>
                </div>
              </div>
        
        `;
        cardsId.appendChild(div)
   
  });
};
catagoriIDimport();
