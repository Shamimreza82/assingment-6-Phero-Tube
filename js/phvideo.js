const dataLode = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/categories`
  );
  const data = await res.json();
  const cardData = data.data;
  //   console.log (cardData)

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
// ------------------------------------------------------------------------------------------
const catagoriIDimport = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${id}`
  );
  const data = await res.json();
  const cardDataId = data.data;
  // console.log(data.data);

  if (!!data.data) {
    // console.log ('name')
  }

  const cardsId = document.getElementById("cards");
  cardsId.innerText = "";
  cardDataId.forEach((element) => {
    // console.log(element);
    const sort = element.others.views;


    const div = document.createElement("div");
    div.classList.add("c");
    div.innerHTML = `
        <div class="card bg-base-100 border rounded-md ">
                <div> 
                    <img class =" h-[200px]" src=${element.thumbnail}>
                    <p> </p>
                 <div>            
                <div class="flex justify-start mt-4 p-2">
                    <div class="h-12 w-12" >
                        <img class ="rounded-full" src=${element.authors[0].profile_picture}>          
                    </div>
                    <div class =" ml-3">
                        <h2 class="font-bold">${element.title}</h2>
                        <h3>${element.authors[0].profile_name} <span><img src=></span></h3>
                        <h4>${element.others.views}</h4>
                    </div>
                </div>
              </div>        
        `;
    cardsId.appendChild(div);
  });
};
catagoriIDimport(1000);

// document.getElementById('blogBtn').addEventListener ('click', function(){
//     // window.location.href ="blog.html"

// })


function convertToNumber(str) {
  const num = parseFloat(str);
  if (str.endsWith("K")) {
    return num * 1000;
  }
  return num;
}
sort.sort((a, b) => convertToNumber(b) - convertToNumber(a));

console.log(sort);