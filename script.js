const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const totalSlides = slides.length;
const sliderTrack = document.querySelector('.slider-track');

// Обработчики для кнопок "Далее" и "Назад"
document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('prev').addEventListener('click', prevSlide);

// Функция для перехода к следующему слайду
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}

// Функция для перехода к предыдущему слайду
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
}

// Функция для обновления положения слайдера
function updateSlider() {
    sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Автоматическая прокрутка слайдов каждые 3 секунды
let autoSlideInterval = setInterval(nextSlide, 3000);

// Остановка автоматической прокрутки при наведении на слайдер
document.querySelector('.slider').addEventListener('mouseenter', stopAutoSlide);

// Возобновление автоматической прокрутки при уходе мыши со слайдера
document.querySelector('.slider').addEventListener('mouseleave', startAutoSlide);

// Функция остановки автоматической прокрутки
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Функция возобновления автоматической прокрутки
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 3000);
}
