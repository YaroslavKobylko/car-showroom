# 🏎️ ABP Car Showroom

Сучасний веб-додаток для перегляду та керування каталогом автомобілів. Побудований на базі **React 18**, **Redux Toolkit** та **TypeScript** з фокусом на чисту архітектуру, продуктивність та стабільність коду.

## 🚀 Основні можливості

* **Каталог авто**: Динамічне завантаження даних через RTK Query з автоматичним кешуванням та обробкою помилок.
* **Пошук та фільтрація**: Миттєвий пошук за назвою чи брендом та сортування за ціною (від дешевих/дорогих) або за рейтингом.
* **Детальна сторінка**: Повна інформація про автомобіль, технічні характеристики та інтерактивна секція відгуків.
* **Система відгуків**: Можливість додавати власні відгуки, які зберігаються в LocalStorage через Redux-слайс (Persistence).
* **Темна тема**: Розумне перемикання теми (Light/Dark) з підтримкою системних налаштувань користувача та збереженням вибору.
* **Адаптивність**: Mobile-first дизайн, що забезпечує ідеальний вигляд на смартфонах, планшетах та десктопах.

## 🛠️ Стек технологій

* **Frontend**: React 18, TypeScript, Vite.
* **State Management**: Redux Toolkit (RTK Query для API запитів).
* **Routing**: React Router v6 (Data APIs).
* **Testing**: Vitest, React Testing Library (Unit, Component & Integration tests).
* **Styling**: Modern CSS3 (Variables, Grid, Flexbox, BEM-naming).
* **Quality Control**: ESLint (сувора конфігурація для TypeScript).

## 📦 Встановлення та запуск

1.  **Клонувати репозиторій:**
    ```bash
    git clone [https://github.com/YaroslavKobylko/car-showroom.git](https://github.com/YaroslavKobylko/car-showroom.git)
    cd car-showroom
    ```

2.  **Встановити залежності:**
    ```bash
    npm install
    ```

3.  **Запустити режим розробки:**
    ```bash
    npm run dev
    ```

## 🧪 Тестування та якість коду

Проєкт має високий рівень покриття тестами, що гарантує надійність компонентів та бізнес-логіки.

* **Запуск усіх тестів:**
    ```bash
    npm run test
    ```

* **Перевірка коду лінтером:**
    ```bash
    npm run lint
    ```

## 📂 Структура проєкту

* `src/app` — конфігурація Redux Store та Middleware.
* `src/components` — атомарні UI компоненти (Card, Modal, Loader, Header) та їх тести.
* `src/features` — логіка API запитів та слайси стану для коментарів.
* `src/hooks` — кастомні React хуки для керування темою та взаємодії зі стором.
* `src/pages` — компоненти сторінок та комплексні інтеграційні тести.
* `src/types` — централізовані інтерфейси та типи TypeScript.
* `public` — статичні ресурси, маніфест та брендовані Favicons.

---
Developed by [Yaroslav Kobylko](https://github.com/YaroslavKobylko)