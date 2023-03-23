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

let changePhoto = document.getElementById("obrazek");

changePhoto.style.backgroundImage = "url('./assets/gallery/gallery1.avif')";

let first = "url('./assets/gallery/gallery1.avif')";
let second = "url('./assets/gallery/gallery2.avif')";
let third = "url('./assets/gallery/gallery3.avif')";
let fourth = "url('./assets/gallery/gallery4.avif')";
let counter2 = 1;
function updatePhoto() {
  if (counter2 === 1) {
    changePhoto.style.backgroundImage = first;
    console.log("hej");
    counter2 += 1;
  } else if (counter2 === 2) {
    changePhoto.style.backgroundImage = second;
    counter2 += 1;
  } else if (counter2 === 3) {
    changePhoto.style.backgroundImage = third;
    counter2 += 1;
  } else if (counter2 === 4) {
    changePhoto.style.backgroundImage = fourth;
    counter2 = 1;
  }
  setTimeout(() => {
    updatePhoto();
  }, 5000);
}

updatePhoto();
