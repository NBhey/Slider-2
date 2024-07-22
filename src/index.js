import './style.css'

const slider = document.querySelector('.slider')
const carousel = {
    autoPlay: true,
    timer: 1000,
    loop: false
}

function createCarousel(el, param){
    el = el.children;
    console.log(el.length)
    let currentSlide = 0;
    el[currentSlide].style.display = "block";
  
    const nextBtn = document.getElementById("next");
    function nextSlide() {
      currentSlide += 1;
      currentSlide >= el.length ? (currentSlide = 0) : false;
      
      for (let i = 0; i < el.length; i++) {
        el[i].style.display = "none";
      }
      el[currentSlide].style.display = "block";
    }
    nextBtn.addEventListener("click", nextSlide);

    if(param.autoPlay === true){
       let interval = setInterval(nextSlide, param.timer) 
    }
    console.log('123')
    if(param.loop === false && currentSlide === 3){
      clearInterval(interval)
    } 
}

createCarousel(slider,carousel)
