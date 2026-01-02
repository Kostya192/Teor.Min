// База данных тем и формул для поиска
const searchDatabase = [
    // 7 класс - Кинематика
    { title: "Равномерное движение", keywords: ["равномерное", "прямолинейное", "постоянная"], class: "7", link: "list7class2formul.html#1", category: "Кинематика" },
    { title: "Средняя скорость", keywords: ["средняя", "векторная"], class: "7", link: "list7class2formul.html#1", category: "Формула" },
    { title: "Среднепутевая скорость", keywords: ["путь", "среднепутевая"], class: "7", link: "list7class2formul.html#1", category: "Формула" },
    { title: "Равноускоренное движение", keywords: ["равноускоренное", "переменное"], class: "7", link: "list7class2formul.html#2", category: "Кинематика" },
    { title: "Ускорение", keywords: ["ускорение"], class: "7", link: "list7class2formul.html#2", category: "Формула" },
    
    // 7 класс - Динамика
    { title: "Динамика", keywords: ["динамика"], class: "7", link: "list7class2formul.html#3", category: "Динамика" },
    { title: "Первый закон Ньютона", keywords: ["первый", "инерция", "покой"], class: "7", link: "list7class2formul.html#3", category: "Законы" },
    { title: "Второй закон Ньютона", keywords: ["второй", "f=ma"], class: "7", link: "list7class2formul.html#3", category: "Законы" },
    { title: "Третий закон Ньютона", keywords: ["третий", "противодействие", "действие"], class: "7", link: "list7class2formul.html#3", category: "Законы" },
    { title: "Сила тяжести", keywords: ["тяжесть", "вес"], class: "7", link: "list7class2formul.html#3", category: "Формула" },
    { title: "Сила упругости", keywords: ["упругость", "пружина", "деформация", "гук"], class: "7", link: "list7class2formul.html#3", category: "Формула" },
    { title: "Сила трения", keywords: ["трение", "коэффициент"], class: "7", link: "list7class2formul.html#3", category: "Формула" },
    { title: "Архимедова сила", keywords: ["архимед", "выталкивающая", "плавание"], class: "7", link: "list7class2formul.html#3", category: "Формула" },
    
    // 8 класс - Термодинамика
    { title: "Количество теплоты", keywords: ["теплота", "нагревание", "охлаждение"], class: "8", link: "list8class1formul.html#1", category: "Термодинамика" },
    { title: "Удельная теплоемкость", keywords: ["теплоемкость"], class: "8", link: "list8class1formul.html#1", category: "Формула" },
    { title: "Плавление", keywords: ["плавление", "кристаллизация"], class: "8", link: "list8class1formul.html#1", category: "Термодинамика" },
    { title: "Парообразование", keywords: ["парообразование", "испарение", "конденсация"], class: "8", link: "list8class1formul.html#1", category: "Термодинамика" },
    
    // 8 класс - Электричество
    { title: "Закон Ома", keywords: ["ом", "сопротивление"], class: "8", link: "list8class2formul.html#1", category: "Электричество" },
    { title: "Мощность тока", keywords: ["мощность"], class: "8", link: "list8class2formul.html#1", category: "Формула" },
    { title: "Работа тока", keywords: ["работа", "электрическая"], class: "8", link: "list8class2formul.html#1", category: "Формула" },
    { title: "Последовательное соединение", keywords: ["последовательное", "цепь"], class: "8", link: "list8class2formul.html#1", category: "Электричество" },
    { title: "Параллельное соединение", keywords: ["параллельное"], class: "8", link: "list8class2formul.html#1", category: "Электричество" },
    
    // 9 класс - Механика
    { title: "Импульс тела", keywords: ["импульс", "количество"], class: "9", link: "list9class1formul.html#1", category: "Механика" },
    { title: "Закон сохранения импульса", keywords: ["сохранение", "импульса"], class: "9", link: "list9class1formul.html#1", category: "Законы" },
    { title: "Механическая работа", keywords: ["работа", "механическая"], class: "9", link: "list9class1formul.html#2", category: "Формула" },
    { title: "Кинетическая энергия", keywords: ["кинетическая"], class: "9", link: "list9class1formul.html#2", category: "Формула" },
    { title: "Потенциальная энергия", keywords: ["потенциальная"], class: "9", link: "list9class1formul.html#2", category: "Формула" },
    { title: "Мощность", keywords: ["мощность", "производительность"], class: "9", link: "list9class1formul.html#2", category: "Формула" },
    
    // 9 класс - Гравитация
    { title: "Закон всемирного тяготения", keywords: ["тяготение", "гравитационная", "всемирного"], class: "9", link: "list9class2formul.html#1", category: "Законы" },
    { title: "Ускорение свободного падения", keywords: ["свободное", "g"], class: "9", link: "list9class2formul.html#1", category: "Формула" },
    
    // 10 класс
    { title: "Кинематика точки", keywords: ["кинематика", "траектория"], class: "10", link: "formuls10class.html#a1", category: "Раздел" },
    { title: "Свободное падение", keywords: ["падение", "свободное"], class: "10", link: "formuls10class.html#f", category: "Кинематика" },
    { title: "Движение по окружности", keywords: ["окружность", "круговое", "центростремительное"], class: "10", link: "formuls10class.html#o", category: "Кинематика" },
    { title: "Закон сохранения энергии", keywords: ["сохранения", "энергии"], class: "10", link: "formuls10class.html#r", category: "Законы" },
    { title: "Момент силы", keywords: ["момент", "вращение", "плечо"], class: "10", link: "formuls10class.html#m", category: "Формула" },
];

document.addEventListener("DOMContentLoaded", function() {
    // Плавная прокрутка к якорю при загрузке страницы
    if (window.location.hash) {
        setTimeout(function() {
            const target = document.querySelector(window.location.hash);
            if (target) {
                target.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start',
                    inline: 'nearest'
                });
                // Подсветка найденного элемента
                target.style.transition = 'background-color 0.5s ease';
                target.style.backgroundColor = 'rgba(9, 105, 218, 0.1)';
                setTimeout(() => {
                    target.style.backgroundColor = '';
                }, 2000);
            }
        }, 100);
    }

    const themeToggleBtn = document.querySelector('.theme-toggle');
    const themeStyle = document.getElementById('theme-style');

    if (themeToggleBtn && themeStyle) {
        // SVG иконки
        const sunIcon = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='5'/%3E%3Cline x1='12' y1='1' x2='12' y2='3'/%3E%3Cline x1='12' y1='21' x2='12' y2='23'/%3E%3Cline x1='4.22' y1='4.22' x2='5.64' y2='5.64'/%3E%3Cline x1='18.36' y1='18.36' x2='19.78' y2='19.78'/%3E%3Cline x1='1' y1='12' x2='3' y2='12'/%3E%3Cline x1='21' y1='12' x2='23' y2='12'/%3E%3Cline x1='4.22' y1='19.78' x2='5.64' y2='18.36'/%3E%3Cline x1='18.36' y1='5.64' x2='19.78' y2='4.22'/%3E%3C/svg%3E\")";
        const moonIcon = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'/%3E%3C/svg%3E\")";

        // Проверяем сохраненную тему в localStorage
        if (localStorage.getItem('theme') === 'dark') {
            themeStyle.href = 'dark.css';
            themeToggleBtn.style.setProperty('--icon', sunIcon);
        }

        themeToggleBtn.addEventListener('click', () => {
            // Переключаем тему
            if (themeStyle.href.includes('dark.css')) {
                themeStyle.href = 'light.css';
                localStorage.setItem('theme', 'light');
                themeToggleBtn.style.setProperty('--icon', moonIcon);
            } else {
                themeStyle.href = 'dark.css';
                localStorage.setItem('theme', 'dark');
                themeToggleBtn.style.setProperty('--icon', sunIcon);
            }       
        });
    }

    // Плавная прокрутка для всех внутренних якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start',
                    inline: 'nearest'
                });
                // Подсветка
                target.style.transition = 'background-color 0.5s ease';
                target.style.backgroundColor = 'rgba(9, 105, 218, 0.1)';
                setTimeout(() => {
                    target.style.backgroundColor = '';
                }, 2000);
            }
        });
    });

    // Умный поиск по темам и формулам
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        const searchContainer = document.querySelector('.search-container');
        
        // Создаем контейнер для результатов поиска
        let searchResults = document.createElement('div');
        searchResults.className = 'search-results';
        searchContainer.appendChild(searchResults);
        
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase().trim();
            
            // Очищаем предыдущие результаты
            searchResults.innerHTML = '';
            
            if (searchTerm === '') {
                searchResults.style.display = 'none';
                return;
            }
            
            // Ищем совпадения в базе данных с оценкой релевантности
            const matches = searchDatabase
                .map(item => {
                    let score = 0;
                    const titleLower = item.title.toLowerCase();
                    const categoryLower = item.category.toLowerCase();
                    
                    // Точное совпадение заголовка = максимальный приоритет
                    if (titleLower === searchTerm) {
                        score += 100;
                    }
                    // Заголовок начинается с искомого слова = высокий приоритет
                    else if (titleLower.startsWith(searchTerm)) {
                        score += 50;
                    }
                    // Заголовок содержит искомое слово = средний приоритет
                    else if (titleLower.includes(searchTerm)) {
                        score += 30;
                    }
                    
                    // Проверка ключевых слов
                    item.keywords.forEach(keyword => {
                        if (keyword === searchTerm) {
                            score += 20; // Точное совпадение ключевого слова
                        } else if (keyword.startsWith(searchTerm)) {
                            score += 10;
                        } else if (keyword.includes(searchTerm)) {
                            score += 5;
                        }
                    });
                    
                    // Совпадение категории
                    if (categoryLower === searchTerm) {
                        score += 15;
                    } else if (categoryLower.includes(searchTerm)) {
                        score += 8;
                    }
                    
                    // Совпадение класса
                    if (item.class === searchTerm) {
                        score += 25;
                    }
                    
                    return { ...item, score };
                })
                .filter(item => item.score > 0) // Только результаты с оценкой > 0
                .sort((a, b) => b.score - a.score); // Сортируем по убыванию оценки
            
            if (matches.length > 0) {
                searchResults.style.display = 'block';
                
                // Ограничиваем количество результатов
                const limitedMatches = matches.slice(0, 8);
                
                limitedMatches.forEach(item => {
                    const resultItem = document.createElement('a');
                    resultItem.href = item.link;
                    resultItem.className = 'search-result-item';
                    
                    // Выделяем совпадение в заголовке
                    const highlightedTitle = highlightText(item.title, searchTerm);
                    
                    const iconSvg = getCategoryIcon(item.category);
                    
                    resultItem.innerHTML = `
                        <div class="result-icon">${iconSvg}</div>
                        <div class="result-content">
                            <div class="result-title">${highlightedTitle}</div>
                            <div class="result-meta">
                                <span class="result-class">${item.class} класс</span>
                                <span class="result-separator">•</span>
                                <span class="result-category">${item.category}</span>
                            </div>
                        </div>
                        <svg class="result-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    `;
                    
                    searchResults.appendChild(resultItem);
                });
                
                // Показываем количество результатов
                if (matches.length > 8) {
                    const moreResults = document.createElement('div');
                    moreResults.className = 'more-results';
                    moreResults.textContent = `Ещё ${matches.length - 8} результатов...`;
                    searchResults.appendChild(moreResults);
                }
            } else {
                searchResults.style.display = 'block';
                searchResults.innerHTML = '<div class="no-search-results">Ничего не найдено 😕</div>';
            }
        });
        
        // Закрываем результаты при клике вне поиска
        document.addEventListener('click', function(e) {
            if (!searchContainer.contains(e.target)) {
                searchResults.style.display = 'none';
            }
        });
        
        // Показываем результаты при фокусе на поле поиска
        searchInput.addEventListener('focus', function() {
            if (searchInput.value.trim() !== '' && searchResults.children.length > 0) {
                searchResults.style.display = 'block';
            }
        });
    }
});

// Функция для выделения совпадений
function highlightText(text, search) {
    const regex = new RegExp(`(${search})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

// Функция для получения иконки категории
function getCategoryIcon(category) {
    const icons = {
        'Кинематика': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
        'Динамика': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v8m-4-4h8"/></svg>',
        'Законы': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18m0-18l-7 7m7-7l7 7M5 17h14"/></svg>',
        'Формула': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h.01M15 9h.01M9 15h6"/></svg>',
        'Электричество': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
        'Термодинамика': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>',
        'Механика': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m6.36 6.36l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m6.36-6.36l4.24-4.24"/></svg>',
        'Раздел': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>'
    };
    
    return icons[category] || '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>';
}

