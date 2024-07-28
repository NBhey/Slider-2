import "./style.css";
import createCarousel from "./js/slider.js";

const slider = document.querySelector(".slider");

const carousel = {
  autoPlay: false,
  intreval: 5000,
  loop: true,
};

createCarousel(slider, carousel);
