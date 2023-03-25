document.addEventListener("DOMContentLoaded", getDogs);
// ducument.addEventListener("DOMContentLoaded", allDogs);

const addPhotos = (item) => {
  const main = document.querySelector("#dog-image-container");

  const img = document.createElement("img");
  img.src = item;
  main.appendChild(img);
};

const addDogs = (item) => {
  const ulist = document.querySelector("#dog-breeds");
  const list = document.createElement("li");
  const typeCheck = item;
  console.log(typeCheck);
  list.innerText = item;

  //   const selection = document.querySelector("#breed-dropdown");
  //   addEventListener("change", (e) => {
  //     const aFiltered = console.log("hey");
  //   });

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

  fetch("https://dog.ceo/api/breeds/list/all")
    .then((r) => r.json())
    .then((dogs) => {
      //   console.log(dogs.message);

      let arrayOfDogs = Object.keys(dogs.message);
      arrayOfDogs.forEach(addDogs);
      console.log(arrayOfDogs);
    });
}
