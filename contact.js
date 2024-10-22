document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Отменяем стандартное поведение формы
            document.getElementById('successMessage').style.display = 'block'; // Показываем сообщение об успешной отправке
            this.reset(); // Сбрасываем форму
        });
