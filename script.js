const burger = document.querySelector("nav svg");
burger.addEventListener("click", () => {
  if (burger.classList.contains("active")) {
    gsap.to(".links", { x: "100%" });
    gsap.set("body", { overflow: "auto" });
    gsap.set("body", { overflowX: "hidden" });
  } else {
    gsap.to(".links", { x: "0%" });
    gsap.fromTo(
      ".links a",
      { opacity: 0 },
      { opacity: 1, delay: 0.4, stagger: 0.25 }
    );
    gsap.set("body", { overflow: "hidden" });
  }
  burger.classList.toggle("active");
});

const photos = gsap.utils.toArray(".photo");
gsap.set(photos, { opacity: 0 });
photos.forEach((photo) => {
  ScrollTrigger.create({
    trigger: photo,
    start: "top center",
    end: "bottom center",
    onEnter: () => {
      gsap.to(photo, { opacity: 1 });
    },
  });
});

document.querySelector(".links").onclick = function () {
  gsap.to(".links", { x: "0%" });
  gsap.set("body", { overflow: "auto" });
};

const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

nextBtn.addEventListener("click", () => {
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  console.log(counter);
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

prevBtn.addEventListener("click", () => {
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  console.log(counter);
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }

  if (carouselImages[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});
