const formWrapper = document.querySelector(".form-wrapper");
const form = document.querySelector("#form");
const searchInput = document.querySelector("#searchInput");
const buttonWrapper = document.querySelector(".button-wrapper");
const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const imageListWrapper = document.querySelector(".imagelist-wrapper");

runEventListeners();

function runEventListeners() {
  form.addEventListener("submit", search);
  clearButton.addEventListener("click", clear);
}

function clear() {
  searchInput.value = "";
  console.log(imageListWrapper);
  // Array.from(imageListWrapper.children).forEach((child)=> child.remove())
  imageListWrapper.innerHTML = "";
  
  
}

function search(e) {
  const value = searchInput.value.trim();
  // RequestParam
  fetch(`https://api.unsplash.com/search/photos?query=${value}`, {
    method: "GET",
    headers: {
      Authorization: " Client-ID pxScDFFM4MuVpk0lXt7489xXf6hT4gGBgdAYdKw9A0A",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      Array.from(data.results).forEach((image) => {
        addImagetoUI(image.urls.small);
      });
    })
    .catch((err) => console.log(err));

  e.preventDefault();
}

function addImagetoUI(url) {
  console.log(imageListWrapper);
  const div = document.createElement("div");
  div.className = "card";
  

  const img = document.createElement("img");
  img.setAttribute("src",url);
  img.height = '300';
  img.width = '300';

  div.append(img);
  imageListWrapper.append(div);
}
