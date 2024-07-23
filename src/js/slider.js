export default function createCarousel(el, param) {
    el = el.children;
  
    let currentSlide = 0;
    el[currentSlide].style.display = "block";
  
    const nextBtn = document.getElementById("next");
    function nextSlide() {
      if (param.loop) {
        currentSlide += 1;
        currentSlide === el.length ? (currentSlide = 0) : false;
        for (let i = 0; i < el.length; i++) {
          el[i].style.display = "none";
        }
        el[currentSlide].style.display = "block";
      } else {
        if (currentSlide >= el.length-1) {
          return;
        } else {
          currentSlide += 1;
          for (let i = 0; i < el.length; i++) {
            el[i].style.display = "none";
          }
          el[currentSlide].style.display = "block";
        }
      }
    }
    nextBtn.addEventListener("click", nextSlide);
    param.autoPlay === true ? setInterval(nextSlide, param.intreval) : false;
  
    const prevBtn = document.getElementById("prev");
    function prevSlide() {
      if (param.loop) {
        currentSlide -= 1;
        currentSlide < 0 ? (currentSlide = el.length - 1) : false;
        for (let i = 0; i < el.length; i++) {
          el[i].style.display = "none";
        }
        el[currentSlide].style.display = "block";
      } else {
        console.log(currentSlide)
        if (currentSlide <= 0) {
          return;
        } else {
          currentSlide -= 1;
          for (let i = 0; i < el.length; i++) {
            el[i].style.display = "none";
          }
          el[currentSlide].style.display = "block";
        }
      }
    }
  
    prevBtn.addEventListener("click", prevSlide);
  }