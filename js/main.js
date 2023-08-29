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

//# Milestone 1

//recupero il contenitore dove inserirò le slide
const slideContainer = document.getElementById("great-slides");

let activeSlide = 0;

images.forEach((img, index) => {
  console.log(img);
  const slide = document.createElement("div");
  slide.classList.add("slide");

  if (index == activeSlide) slide.classList.add("active");

  slide.innerHTML = `
<img src="./${img.image}" alt="img" />
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
