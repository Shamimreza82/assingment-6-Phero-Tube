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
  cardDataId.forEach((element) => {
    console.log(element);
    const div = document.createElement("div");
    div.classList.add("c")
    div.innerHTML = `
        <div class="card bg-base-100 border rounded-md h-[350px]">            
                <figure class = " w-fit"><img src=${element.thumbnail}></figure>
                <div class="flex justify-center">
                    <div class="h-24 w-24" >
                        <img class ="rounded-full" src=${element.authors[0].profile_picture}>
                    </div>
                    <div>
                        <h2 class="font-bold">${element.title}</h2>
                        <h3>Awlad Hossain <span><img src="" alt=""></span></h3>
                        <h4>91K views</h4>
                    </div>
                </div>
              </div>
        
        `;
        cardsId.appendChild(div)
   
  });
};
catagoriIDimport();
