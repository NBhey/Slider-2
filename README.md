# Слайдер

## В данной работе выполнен плагин для подключения слайдера на страницу

### Этапы выполнения работы

1. На главной странице добавлена разметка для карусели

```<div class="slider-wrap">
        <ul class="slider">
          <li class="slider-item">
            <img class="slider-item-img" src="./src/img/pic1.png" alt="" />
          </li>
          <li class="slider-item">
            <img class="slider-item-img" src="./src/img/pic2.jpg" alt="" />
          </li>
          <li class="slider-item">
            <img class="slider-item-img" src="./src/img/pic3.jpg" alt="" />
          </li>
        </ul>
        <div class="slider-arrow">
          <button id="prev" class="arrow">&lt;</button>
          <button id="next" class="arrow">></button>
        </div>
      </div>
```

2. Добавлен скрипт, который отвечает за работу карусели

3. Карусель позволяет программно изменять слайды

```
const carousel = {
  autoPlay: false,
  intreval: 5000,
  loop: true,
};
```
