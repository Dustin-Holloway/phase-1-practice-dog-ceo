//DOM selectors

const dropDownSelector = document.querySelector("#breed-dropdown");
const ulist = document.querySelector("#dog-breeds");
let filteredDogArray = [];
console.log(filteredDogArray);
//Eventlisteners

dropDownSelector.addEventListener("change", (e) => {
  const letter = e.target.value;
  selectBreedsStartingWith(letter);
});

function selectBreedsStartingWith(letter) {
  console.log("letter:", letter);

  const filteredBreeds = filteredDogArray.filter((breed) =>
    breed.startsWith(letter)
  );
  ulist.innerHTML = "";

  filteredBreeds.forEach(addDogs);
}

//Global

const addPhotos = (item) => {
  const main = document.querySelector("#dog-image-container");
  const img = document.createElement("img");
  img.src = item;
  main.appendChild(img);
};

const addDogs = (item) => {
  const dropDownSelector = document.querySelector("#breed-dropdown");
  const ulist = document.querySelector("#dog-breeds");
  const list = document.createElement("li");
  ulist.innerHTML = " ";
  list.innerHtml = "";
  list.innerText = item;
  ulist.appendChild(list);

  list.addEventListener("click", function () {
    list.style.color = "red";
    console.log("clicked");
  });
  list.addEventListener("mouseover", (e) => {
    list.style.cursor = "progress";
  });
};

function getDogs() {
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((res) => res.json())
    // .then((json) => console.log(json));
    .then((photos) => {
      //   console.log(photos.message);
      photos["message"].forEach(addPhotos);
    });
}

function getBreeds() {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((r) => r.json())
    .then((dogs) => {
      //   console.log(dogs.message);

      const arrayOfDogs = Object.keys(dogs.message);
      arrayOfDogs.forEach(addDogs);
      filteredDogArray = arrayOfDogs;
      // console.log(arrayOfDogs);
    });
}

getDogs();
getBreeds();
