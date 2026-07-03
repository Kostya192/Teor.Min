function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function normalize(str) {
    return str.toLowerCase().replace(/ё/g, 'е');
}

function tokenize(text) {
    return normalize(text)
        .replace(/[^a-zа-я0-9\s]/gi, ' ')
        .split(/\s+/)
        .filter(w => w.length > 1);
}

// Ключевые слова из названий тем
if (typeof searchDatabase !== 'undefined') {
    searchDatabase.forEach(item => {
        item.keywords = tokenize(item.title + ' ' + (item.alt || ''));
    });
}

function highlightText(text, search) {
    const words = search.trim().split(/\s+/).filter(Boolean);
    let result = text;
    words.forEach(word => {
        const regex = new RegExp(`(${escapeRegex(word)})`, 'gi');
        result = result.replace(regex, '<mark>$1</mark>');
    });
    return result;
}

function scoreItem(item, searchTerm, words) {
    let score = 0;
    const titleLower = normalize(item.title);
    const altLower = normalize(item.alt || '');
    const fullText = titleLower + ' ' + altLower;

    words.forEach(rawWord => {
        const word = normalize(rawWord);

        if (titleLower === word) score += 100;
        else if (titleLower.startsWith(word)) score += 50;
        else if (titleLower.includes(word)) score += 30;
        else if (altLower.includes(word)) score += 25;

        item.keywords.forEach(kw => {
            if (kw === word) score += 15;
            else if (kw.startsWith(word)) score += 8;
            else if (kw.includes(word)) score += 4;
        });
    });

    if (item.class === searchTerm || item.class === words[0]) score += 20;
    if (words.every(w => fullText.includes(normalize(w)))) score += 10;

    return score;
}

function semesterLabel(semester) {
    if (semester === 'I') return 'I полугодие';
    if (semester === 'II') return 'II полугодие';
    return semester || '';
}

const topicIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>';

function getElementFromHash(hash) {
    if (!hash || hash.length <= 1) return null;
    return document.getElementById(decodeURIComponent(hash.slice(1)));
}

function highlightHashTarget(target) {
    target.style.transition = 'background-color 0.5s ease';
    target.style.backgroundColor = 'var(--highlight-mid)';
    setTimeout(() => { target.style.backgroundColor = ''; }, 2000);
}

function scrollToHash(hash, options = {}) {
    const { behavior = 'smooth', highlight = false } = options;
    const target = getElementFromHash(hash);
    if (!target) return false;
    target.scrollIntoView({ behavior, block: 'start' });
    if (highlight) highlightHashTarget(target);
    return true;
}

function scrollToCurrentHash() {
    const hash = window.location.hash;
    if (!hash || hash.length <= 1) return;

    const run = () => scrollToHash(hash, { highlight: true });

    if (window.MathJax && window.MathJax.startup && window.MathJax.startup.promise) {
        window.MathJax.startup.promise.then(run).catch(() => setTimeout(run, 150));
    } else {
        setTimeout(run, 150);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Фон с частицами (Three.js) — на всех страницах
    if (!document.getElementById('physics-bg')) {
        const bg = document.createElement('script');
        bg.src = 'physics-bg.js';
        bg.async = true;
        document.body.appendChild(bg);
    }

    scrollToCurrentHash();

    const themeToggleBtn = document.querySelector('.theme-toggle');
    const themeStyle = document.getElementById('theme-style');
    const sunIcon = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Ccircle cx='12' cy='12' r='5'/%3E%3Cline x1='12' y1='1' x2='12' y2='3'/%3E%3Cline x1='12' y1='21' x2='12' y2='23'/%3E%3Cline x1='4.22' y1='4.22' x2='5.64' y2='5.64'/%3E%3Cline x1='18.36' y1='18.36' x2='19.78' y2='19.78'/%3E%3Cline x1='1' y1='12' x2='3' y2='12'/%3E%3Cline x1='21' y1='12' x2='23' y2='12'/%3E%3C/svg%3E\")";
    const moonIcon = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Cpath d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'/%3E%3C/svg%3E\")";

    if (themeToggleBtn && themeStyle) {
        if (localStorage.getItem('theme') === 'dark') {
            themeStyle.href = 'dark.css';
            themeToggleBtn.style.setProperty('--icon', sunIcon);
        }
        themeToggleBtn.addEventListener('click', () => {
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

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.length <= 1) return;
            e.preventDefault();
            if (scrollToHash(href)) {
                history.replaceState(null, '', href);
            }
        });
    });

    const mobileToggle = document.getElementById('mobileNavToggle');
    const mainNav = document.getElementById('mainNav');
    if (mobileToggle && mainNav) {
        mobileToggle.addEventListener('click', () => {
            const open = mainNav.classList.toggle('open');
            mobileToggle.setAttribute('aria-expanded', open);
        });
        document.addEventListener('click', e => {
            if (!mobileToggle.contains(e.target) && !mainNav.contains(e.target)) {
                mainNav.classList.remove('open');
                mobileToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    const classTabs = document.querySelectorAll('.class-tab');
    const courseCards = document.querySelectorAll('.card[data-class]');
    classTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            classTabs.forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });
            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');
            const filter = tab.dataset.filter;
            courseCards.forEach(card => {
                card.style.display = (filter === 'all' || card.dataset.class === filter) ? '' : 'none';
            });
        });
    });

    const searchInput = document.getElementById('searchInput');
    if (!searchInput || typeof searchDatabase === 'undefined') return;

    const searchContainer = document.querySelector('.search-container');
    const searchResults = document.createElement('div');
    searchResults.className = 'search-results';
    searchResults.setAttribute('role', 'listbox');
    searchContainer.appendChild(searchResults);

    let activeIndex = -1;

    function renderResults(matches, searchTerm) {
        searchResults.innerHTML = '';
        activeIndex = -1;

        if (matches.length === 0) {
            searchResults.style.display = 'block';
            searchResults.innerHTML = '<div class="no-search-results">Тема не найдена</div>';
            return;
        }

        searchResults.style.display = 'block';
        const limited = matches.slice(0, 12);

        limited.forEach((item, i) => {
            const el = document.createElement('a');
            el.href = item.link;
            el.className = 'search-result-item';
            el.setAttribute('role', 'option');
            el.innerHTML = `
                <div class="result-icon">${topicIcon}</div>
                <div class="result-content">
                    <div class="result-title">${highlightText(item.title, searchTerm)}</div>
                    <div class="result-meta">
                        <span class="result-class">${item.class} класс</span>
                        <span class="result-separator">·</span>
                        <span class="result-category">${semesterLabel(item.semester)}</span>
                    </div>
                </div>
                <svg class="result-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            `;
            el.dataset.index = i;
            searchResults.appendChild(el);
        });

        if (matches.length > 12) {
            const more = document.createElement('div');
            more.className = 'more-results';
            more.textContent = `Ещё ${matches.length - 12}…`;
            searchResults.appendChild(more);
        }
    }

    function setActiveItem(index) {
        const items = searchResults.querySelectorAll('.search-result-item');
        items.forEach((el, i) => el.classList.toggle('active', i === index));
        activeIndex = index;
        if (items[index]) items[index].scrollIntoView({ block: 'nearest' });
    }

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        if (!searchTerm) {
            searchResults.style.display = 'none';
            searchResults.innerHTML = '';
            return;
        }
        const words = searchTerm.split(/\s+/).filter(Boolean);
        const matches = searchDatabase
            .map(item => ({ ...item, score: scoreItem(item, searchTerm, words) }))
            .filter(item => item.score > 0)
            .sort((a, b) => b.score - a.score);
        renderResults(matches, searchTerm);
    });

    searchInput.addEventListener('keydown', function(e) {
        const items = searchResults.querySelectorAll('.search-result-item');
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setActiveItem(Math.min(activeIndex + 1, items.length - 1));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setActiveItem(Math.max(activeIndex - 1, 0));
        } else if (e.key === 'Enter' && activeIndex >= 0 && items[activeIndex]) {
            e.preventDefault();
            window.location.href = items[activeIndex].href;
        } else if (e.key === 'Escape') {
            searchResults.style.display = 'none';
            this.blur();
        }
    });

    document.addEventListener('click', e => {
        if (!searchContainer.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });

    searchInput.addEventListener('focus', function() {
        if (this.value.trim() && searchResults.children.length > 0) {
            searchResults.style.display = 'block';
        }
    });
});
