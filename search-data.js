// Темы с сайта — разделы из списков курсов (button-link)
const searchDatabase = [
    // ── 7 класс, II полугодие ──
    { title: "Равномерное движение", class: "7", semester: "II", link: "list7class2formul.html#1" },
    { title: "Равноускоренное движение", class: "7", semester: "II", link: "list7class2formul.html#2" },
    { title: "Динамика", class: "7", semester: "II", link: "list7class2formul.html#3" },
    { title: "Статика", class: "7", semester: "II", link: "list7class2formul.html#4" },
    { title: "Законы сохранения", class: "7", semester: "II", link: "list7class2formul.html#5" },

    // ── 8 класс, I полугодие ──
    { title: "Равномерное движение", class: "8", semester: "I", link: "list8class1formul.html#1" },
    { title: "Равноускоренное движение", class: "8", semester: "I", link: "list8class1formul.html#2" },
    { title: "Динамика", class: "8", semester: "I", link: "list8class1formul.html#3" },
    { title: "Статика", class: "8", semester: "I", link: "list8class1formul.html#4" },
    { title: "Законы Сохранения", class: "8", semester: "I", link: "list8class1formul.html#5", alt: "Законы сохранения" },
    { title: "Давление твердых тел и жидкостей", class: "8", semester: "I", link: "list8class1formul.html#6", alt: "Давление твёрдых тел и жидкостей" },
    { title: "Термодинамика", class: "8", semester: "I", link: "list8class1formul.html#7" },

    // ── 8 класс, II полугодие ──
    { title: "Равномерное движение", class: "8", semester: "II", link: "list8class2formul.html#1" },
    { title: "Равноускоренное движение", class: "8", semester: "II", link: "list8class2formul.html#2" },
    { title: "Динамика", class: "8", semester: "II", link: "list8class2formul.html#3" },
    { title: "Статика", class: "8", semester: "II", link: "list8class2formul.html#4" },
    { title: "Законы сохранения", class: "8", semester: "II", link: "list8class2formul.html#5" },
    { title: "Электростатика", class: "8", semester: "II", link: "list8class2formul.html#6" },
    { title: "Электродинамика", class: "8", semester: "II", link: "list8class2formul.html#7" },
    { title: "Магнетизм", class: "8", semester: "II", link: "list8class2formul.html#8" },

    // ── 9 класс, I полугодие ──
    { title: "Равномерное и неравномерное движения", class: "9", semester: "I", link: "list9class1formul.html#a1", alt: "Равномерное и неравномерное движение" },
    { title: "Равноускоренное движение", class: "9", semester: "I", link: "list9class1formul.html#a" },
    { title: "Равноускоренное движение по окружности", class: "9", semester: "I", link: "list9class1formul.html#67" },
    { title: "Динамика", class: "9", semester: "I", link: "list9class1formul.html#c" },
    { title: "Законы сохранения", class: "9", semester: "I", link: "list9class1formul.html#d" },
    { title: "Статика", class: "9", semester: "I", link: "list9class1formul.html#e" },
    { title: "Электродинамика", class: "9", semester: "I", link: "list9class1formul.html#I" },
    { title: "Магнетизм", class: "9", semester: "I", link: "list9class1formul.html#j" },
    { title: "Оптика", class: "9", semester: "I", link: "list9class1formul.html#L" },

    // ── 9 класс, II полугодие ──
    { title: "Равномерное и неравномерное движение", class: "9", semester: "II", link: "list9class2formul.html#1" },
    { title: "Равноускоренное движение", class: "9", semester: "II", link: "list9class2formul.html#2" },
    { title: "Равноускоренное движение по окружности", class: "9", semester: "II", link: "list9class2formul.html#3" },
    { title: "Динамика", class: "9", semester: "II", link: "list9class2formul.html#4" },
    { title: "Законы сохранения", class: "9", semester: "II", link: "list9class2formul.html#5" },
    { title: "Электричество", class: "9", semester: "II", link: "list9class2formul.html#6" },
    { title: "Магнетизм", class: "9", semester: "II", link: "list9class2formul.html#7" },
    { title: "Статика", class: "9", semester: "II", link: "list9class2formul.html#8" },
    { title: "Колебания", class: "9", semester: "II", link: "list9class2formul.html#9" },
    { title: "Оптика", class: "9", semester: "II", link: "list9class2formul.html#10" },
    { title: "Ядерная физика", class: "9", semester: "II", link: "list9class2formul.html#11" },

    // ── 10 класс, I полугодие ──
    { title: "Равномерное движение", class: "10", semester: "I", link: "list2.html#a1" },
    { title: "Равноускоренное движение", class: "10", semester: "I", link: "list2.html#a" },
    { title: "Равномерное движение по окружности", class: "10", semester: "I", link: "list2.html#b" },
    { title: "Динамика", class: "10", semester: "I", link: "list2.html#c" },
    { title: "Законы сохранения", class: "10", semester: "I", link: "list2.html#d" },
    { title: "Статика", class: "10", semester: "I", link: "list2.html#e" },
    { title: "Колебания", class: "10", semester: "I", link: "list2.html#f" },
    { title: "МКТ", class: "10", semester: "I", link: "list2.html#g" },
    { title: "Термодинамика", class: "10", semester: "I", link: "list2.html#h" },
    { title: "Электростатика", class: "10", semester: "I", link: "list2.html#i" },
    { title: "Электродинамика", class: "10", semester: "I", link: "list2.html#k" },
    { title: "Магнетизм", class: "10", semester: "I", link: "list2.html#z" },
    { title: "Оптика", class: "10", semester: "I", link: "list2.html#q" },

    // ── 10 класс, II полугодие ──
    { title: "Равномерное движение", class: "10", semester: "II", link: "formuls10class.html#a1" },
    { title: "Равноускоренное движение", class: "10", semester: "II", link: "formuls10class.html#a" },
    { title: "Равномерное движение по окружности", class: "10", semester: "II", link: "formuls10class.html#b" },
    { title: "Динамика", class: "10", semester: "II", link: "formuls10class.html#c" },
    { title: "Законы сохранения", class: "10", semester: "II", link: "formuls10class.html#d" },
    { title: "Статика", class: "10", semester: "II", link: "formuls10class.html#e" },
    { title: "Колебания", class: "10", semester: "II", link: "formuls10class.html#f" },
    { title: "МКТ", class: "10", semester: "II", link: "formuls10class.html#g" },
    { title: "Термодинамика", class: "10", semester: "II", link: "formuls10class.html#h" },
    { title: "Электростатика", class: "10", semester: "II", link: "formuls10class.html#I" },
    { title: "Электродинамика", class: "10", semester: "II", link: "formuls10class.html#K" },
    { title: "Магнетизм", class: "10", semester: "II", link: "formuls10class.html#j" },
    { title: "Оптика", class: "10", semester: "II", link: "formuls10class.html#L" },
];
