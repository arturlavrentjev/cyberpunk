const loading = document.querySelector(".loading");
window.addEventListener("load", () => {
  loading.style.display = "none";
});

const mySwiper = new Swiper(".swiper-container", {
  loop: true,
  autoplay: {
    delay: 4000,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});
