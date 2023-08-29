// array di oggetti letterali
const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

// # Milestone 0

//creare carosello

//# Milestone 1 e 2

//recupero il contenitore dove inserirò le slide
const slideContainer = document.getElementById("great-slides");

let activeSlide = 0;

//uso l'array per popolare il carosello
images.forEach((img, index) => {
  console.log(img);

  const slide = document.createElement("div");
  slide.classList.add("slide");

  if (index == activeSlide) slide.classList.add("active");

  slide.innerHTML = `
<img src="./${img.image}" alt="img"  />
<div class="slide-text">
  <h5>${img.title}</h5>
  <p>
  ${img.text}
  </p>
</div>
  `;

  img.HTMLnode = slide;

  slideContainer.append(slide);
});

console.log(images);

const allSlide = document.getElementsByClassName("slide");

//recupero i controlli
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

//bottone avanti
nextButton.addEventListener("click", goNext);

//funzione bottone avanti
function goNext() {
  const oldSlide = allSlide[activeSlide];
  oldSlide.classList.remove("active");

  activeSlide++;

  if (activeSlide >= images.length) {
    activeSlide = 0;
  }

  const newSlide = allSlide[activeSlide];
  newSlide.classList.add("active");
}

//bottone indietro
prevButton.addEventListener("click", goPrev);

//funzione bottone indietro
function goPrev() {
  const oldSlide = allSlide[activeSlide];
  oldSlide.classList.remove("active");

  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = images.length - 1;
  }

  const newSlide = allSlide[activeSlide];
  newSlide.classList.add("active");
}
