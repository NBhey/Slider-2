import createCarousel from "./slider.js";

describe("create carousel", () => {
  const testObject = {
    autoPlay: false,
    intreval: 5000,
    loop: true,
  };

  const body = document.querySelector("body");
  const el = document.createElement("main");
  body.append(el);
  el.innerHTML = `
    <div class="slider-wrap">
                <ul class="slider">
                    <li class="slider-item"><img class="slider-item-img" src="./src/img/pic1.png" alt=""></li>
                    <li class="slider-item"><img class="slider-item-img" src="./src/img/pic2.jpg" alt=""></li>
                    <li class="slider-item"><img class="slider-item-img" src="./src/img/pic3.jpg" alt=""></li>
                </ul>
                <div class='slider-arrow'>
                    <button id='prev' class='arrow'>&lt;</button>
                    <button id='next' class='arrow'>></button>
                  </div>
            </div>
    `;

  const slider = document.querySelector(".slider");
  createCarousel(slider, testObject);
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");

  test("To be a function", () => {
    expect(createCarousel).toBeInstanceOf(Function);
  });

  test("Function find element", () => {
    expect(document.querySelector(".slider-wrap")).toBeTruthy();
    expect(document.querySelector(".slider")).toBeTruthy();
    expect(document.querySelector(".slider-arrow")).toBeTruthy();
    expect(document.getElementById("prev")).toBeTruthy();
    expect(document.getElementById("next")).toBeTruthy();
  });

  test("The first slider-item  is visible and other hidden", () => {
    expect(document.querySelector(".slider").children[0].style.display).toBe(
      "block",
    );
    for (let i = 1; i < slider.children.length; i++) {
      expect(document.querySelector(".slider").children[i].style.display).toBe(
        "",
      );
    }
  });

  test("The second slider-item  is visible after next click and other hidden", () => {
    nextBtn.click();
    expect(document.querySelector(".slider").children[0].style.display).toBe(
      "none",
    );
    expect(document.querySelector(".slider").children[1].style.display).toBe(
      "block",
    );
    expect(document.querySelector(".slider").children[2].style.display).toBe(
      "none",
    );
  });

  test("The third slider-item  is visible after next click and other hidden", () => {
    nextBtn.click();
    expect(document.querySelector(".slider").children[0].style.display).toBe(
      "none",
    );
    expect(document.querySelector(".slider").children[1].style.display).toBe(
      "none",
    );
    expect(document.querySelector(".slider").children[2].style.display).toBe(
      "block",
    );
  });

  test("The third slider-item  is visible after prev click and other hidden", () => {
    prevBtn.click();
    expect(document.querySelector(".slider").children[0].style.display).toBe(
      "none",
    );
    expect(document.querySelector(".slider").children[1].style.display).toBe(
      "block",
    );
    expect(document.querySelector(".slider").children[2].style.display).toBe(
      "none",
    );
  });
});
