const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const totalSlides = slides.length;

// Обработчик события для кнопки "Далее"
document.getElementById('next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides; // Увеличиваем индекс текущего слайда
    updateSlider(); // Обновляем слайдер
});

// Обработчик события для кнопки "Назад"
document.getElementById('prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Уменьшаем индекс текущего слайда
    updateSlider(); // Обновляем слайдер
});

// Функция для обновления слайдера
function updateSlider() {
    const sliderTrack = document.querySelector('.slider-track');
    sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`; // Сдвигаем слайдер
}

// Дополнительная функция для автоматической прокрутки слайдов
let autoSlideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides; // Увеличиваем индекс текущего слайда
    updateSlider(); // Обновляем слайдер
}, 3000); // Интервал в 3 секунды

// Остановка автоматической прокрутки при наведении
document.querySelector('.slider').addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval); // Останавливаем интервал
});

// Возобновление автоматической прокрутки при выходе мыши
document.querySelector('.slider').addEventListener('mouseleave', () => {
    autoSlideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides; // Увеличиваем индекс текущего слайда
        updateSlider(); // Обновляем слайдер
    }, 3000); // Интервал в 3 секунды
});
