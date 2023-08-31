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

  // const newarr = cardDataId.forEach(a => {
  //   const hourconvart = a.others.posted_date;
  //   const hours = Math.floor(hourconvart / 3600); 
  //   const remainingSeconds = hourconvart % 3600;
  //   const minutes = Math.floor(remainingSeconds / 60);
  //   console.log (hours, minutes)

  // })

  if (!!data.data) {
    // console.log ('name')
  }

  const cardsId = document.getElementById("cards");
  cardsId.innerText = "";
  cardDataId.forEach((element) => {
    // console.log(element);
    const sort = element.others.posted_date;
    const hours = Math.floor(sort / 3600); 
    const remainingSeconds = sort % 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    console.log (hours, minutes)

    const div = document.createElement("div");
    div.classList.add("c");
    div.innerHTML = `
        <div class="card bg-base-100 border rounded-md ">
                <div> 
                    <img class =" h-[200px] w-full" src=${element.thumbnail}>
                    <p>${hours}hrs ${minutes} min ago </p>
                 <div>            
                <div class="flex justify-start mt-4 p-2">
                    <div class=" h-[50px] w-[50px]" >
                        <img class ="h-[50px] rounded-full" src=${element.authors[0].profile_picture}>          
                    </div>
                    <div class =" ml-3">
                        <h2 class="font-bold">${element.title}</h2>
                        <div class = " flex gap-2"> 
                        <h3>${element.authors[0].profile_name}</h3>
                        <span>${element.authors[0].verified? `<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="20px" height="20px"><linearGradient id="IMoH7gpu5un5Dx2vID39Ra" x1="9.858" x2="38.142" y1="9.858" y2="38.142" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#9dffce"/><stop offset="1" stop-color="#50d18d"/></linearGradient><path fill="url(#IMoH7gpu5un5Dx2vID39Ra)" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"/><linearGradient id="IMoH7gpu5un5Dx2vID39Rb" x1="13" x2="36" y1="24.793" y2="24.793" gradientUnits="userSpaceOnUse"><stop offset=".824" stop-color="#135d36"/><stop offset=".931" stop-color="#125933"/><stop offset="1" stop-color="#11522f"/></linearGradient><path fill="url(#IMoH7gpu5un5Dx2vID39Rb)" d="M21.293,32.707l-8-8c-0.391-0.391-0.391-1.024,0-1.414l1.414-1.414	c0.391-0.391,1.024-0.391,1.414,0L22,27.758l10.879-10.879c0.391-0.391,1.024-0.391,1.414,0l1.414,1.414	c0.391,0.391,0.391,1.024,0,1.414l-13,13C22.317,33.098,21.683,33.098,21.293,32.707z"/></svg>` : " "} </span>
                        </div>
                        
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