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
    markers: true,
    onEnter: () => {
      gsap.to(photo, { opacity: 1 });
    },
  });
});
