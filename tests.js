document.getElementById('career-test').addEventListener('submit', function(event) {
    event.preventDefault();

    let score = 0;

    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    const q4 = document.querySelector('input[name="q4"]:checked');

    // Лог для проверки выбранных ответов
    console.log("Q1: ", q1 ? q1.value : "Not answered");
    console.log("Q2: ", q2 ? q2.value : "Not answered");
    console.log("Q3: ", q3 ? q3.value : "Not answered");
    console.log("Q4: ", q4 ? q4.value : "Not answered");

    if (!q1 || !q2 || !q3 || !q4) {
        alert('Пожалуйста, ответьте на все вопросы!');
        return;
    }

    score += parseInt(q1.value);
    score += parseInt(q2.value);
    score += parseInt(q3.value);
    score += parseInt(q4.value);

    const resultText = document.getElementById('result-text');
    const specialitiesList = document.getElementById('specialities-list');
    specialitiesList.innerHTML = '';

    if (score >= 10) {
        resultText.textContent = 'Вы подходите для разработки программного обеспечения.';
        specialitiesList.innerHTML += '<li>Программист</li><li>Разработчик приложений</li>';
    } else if (score >= 6) {
        resultText.textContent = 'Вам подходит карьера в веб-дизайне или графическом дизайне.';
        specialitiesList.innerHTML += '<li>Веб-дизайнер</li><li>Графический дизайнер</li>';
    } else if (score >= 3) {
        resultText.textContent = 'Анализ данных и работа с ними – это ваша сильная сторона.';
        specialitiesList.innerHTML += '<li>Аналитик данных</li><li>Специалист по данным</li>';
    } else {
        resultText.textContent = 'Вам подходит работа в игровой индустрии.';
        specialitiesList.innerHTML += '<li>Разработчик игр</li><li>Тестировщик игр</li>';
    }

    document.getElementById('result').classList.remove('hidden');
});
