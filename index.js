let inputCountry = document.getElementById("countryinput");
let search = document.getElementById("search");
let container = document.getElementById("container");
let list = document.getElementById("list");
// displayAll();

search.addEventListener("click", () => {
  fetch(`https://restcountries.com/v3.1/name/${inputCountry.value}`)
    .then((response) => response.json())
    .then((data) => displayCountry(data))
    .catch((err) => console.log("Error", err));
});

const displayCountry = (data) => {
  data.forEach((country) => {
    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<p class="card-text">${country.name.common}</p> <img src="${country.flags.png}" class="card-img-top" alt="...">
  <div class="card-body">
  <p class="card-text">${country.capital}</p>
    <h5 class="card-title">${country.region}</h5>
    
  </div>`;
    // div.style.width = "1800px";
    // div.style.height = "1800px";
    // let div = document.createElement("div");
    // let ptag = document.createElement("p");
    // div.setAttribute("id", "div");
    // let img = document.createElement("image");
    // img.src = `${country.flag}`;
    // div.appendChild(img);
    // div.appendChild(ptag);
    container.appendChild(div);
  });
};

const displayAll = (country) => {
  for (let index = 0; index < 10; index++) {
    list.innerHTML += `<div class="container">
  <div class="row row-cols-3">
    <div class="col"><p class="card-text">${country[index].name.common}</p> <img src="${country[index].flags.png}" class="card-img-top" alt="...">
  <div class="card-body">
  <p class="card-text">${country[index].capital}</p>
    <h5 class="card-title">${country[index].region}</h5>
     </div>
</div> </div>
  </div>`;
  }
};

function fetching() {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then(function (data) {
      // data;
      displayAll(data);
    });
}
fetching();
