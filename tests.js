document.addEventListener('DOMContentLoaded', function () {
    const careerTest = document.getElementById('career-test');
    const resultSection = document.getElementById('result');
    const resultText = document.getElementById('result-text');
    const specialitiesList = document.getElementById('specialities-list');

    // Убедитесь, что форма найдена
    if (careerTest) {
        careerTest.addEventListener('submit', function (event) {
            event.preventDefault();  // Останавливаем отправку формы

            // Получение значений
            const q1 = document.querySelector('input[name="q1"]:checked');
            const q2 = document.querySelector('input[name="q2"]:checked');
            const q3 = document.querySelector('input[name="q3"]:checked');
            const q4 = document.querySelector('input[name="q4"]:checked');

            // Убедитесь, что все вопросы отвечены
            if (q1 && q2 && q3 && q4) {
                // Рассчитаем результат
                const score = parseInt(q1.value) + parseInt(q2.value) + parseInt(q3.value) + parseInt(q4.value);

                let resultMessage = '';
                let specialities = [];

                // Выдаем результат на основе набранных баллов
                if (score >= 10) {
                    resultMessage = 'Вы склонны к программированию и разработке ПО.';
                    specialities = ['Программист', 'Разработчик мобильных приложений', 'Веб-разработчик'];
                } else if (score >= 7) {
                    resultMessage = 'У вас есть интерес к дизайну и визуальному искусству.';
                    specialities = ['Графический дизайнер', 'Веб-дизайнер'];
                } else if (score >= 4) {
                    resultMessage = 'Вам интересны данные и их анализ.';
                    specialities = ['Аналитик данных', 'Бизнес-аналитик'];
                } else {
                    resultMessage = 'Вы можете преуспеть в разработке игр.';
                    specialities = ['Гейм-дизайнер', 'Разработчик игр'];
                }

                // Отображаем результат
                resultText.textContent = resultMessage;
                specialitiesList.innerHTML = '';
                specialities.forEach(function (speciality) {
                    const li = document.createElement('li');
                    li.textContent = speciality;
                    specialitiesList.appendChild(li);
                });

                // Показываем раздел с результатом
                resultSection.classList.remove('hidden');
            } else {
                alert('Пожалуйста, ответьте на все вопросы.');
            }
        });
    } else {
        console.error('Элемент формы "career-test" не найден.');
    }
});
