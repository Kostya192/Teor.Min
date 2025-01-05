document.addEventListener("DOMContentLoaded", function() {
    const themeToggleBtn = document.querySelector('.theme-toggle');
    const themeStyle = document.getElementById('theme-style');

    // Проверяем сохраненную тему в localStorage
    if (localStorage.getItem('theme') === 'dark') {
        themeStyle.href = 'dark.css'; // Устанавливаем тёмную тему
        themeToggleBtn.innerHTML = '☀️'; // Изменяем иконку на светлую
    }

    themeToggleBtn.addEventListener('click', () => {
        // Переключаем тему
        if (themeStyle.href.includes('dark.css')) {
            themeStyle.href = 'light.css'; // Устанавливаем светлую тему
            localStorage.setItem('theme', 'light'); // Сохраняем выбор
            themeToggleBtn.innerHTML = '🌙'; // Изменяем иконку на тёмную
        } else {
            themeStyle.href = 'dark.css'; // Устанавливаем тёмную тему
            localStorage.setItem('theme', 'dark'); // Сохраняем выбор
            themeToggleBtn.innerHTML = '☀️'; // Изменяем иконку на светлую


        }       
    });
});

