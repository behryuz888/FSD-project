import "./styles.scss";

export function Header() {
  return `
      <header class="header">
        <a href="/"><img class="logo" src="/brand-logo.svg"></a>
        <img class="iconCatalog-xl" src="/menuBtn-dark.svg">
        <button class="catalog-btn">
          <img src="/catalog-icon.svg">
          <span>Категории</span>
        </button>
        <input type="text" placeholder="Поиск по товарам" class="searchbar" />
        <div class="actions">
          <div class="action"><img src="/auth-icon.svg"></div>
          <div class="action"><img src="/favorites-icon.svg"></div>
          <div class="action"><img src="/comparison-icon.svg"></div>
          <div class="action"><img src="/cart-icon.svg"></div>
        </div>
      </header>
      <nav class="navbar">
        <span class="nav-section">Для геймеров</span>
        <span class="nav-section">Смартфоны и гаджеты</span>
        <span class="nav-section">Компьютеры и ноутбуки</span>
        <span class="nav-section">Комплектующие для ПК</span>
        <span class="nav-section">Компьютерная периферия</span>
        <span class="nav-section">Сетевое оборудование</span>
        <span class="nav-section">Офисная техника и мебель</span>
        <span class="nav-section">Автовары</span>
        <span class="nav-section">Товары для дома</span>
        <span class="nav-section">Решение для бизнеса</span>
      </nav>
      <div class="sidebar">
        <img class="sidebar-toggle" src="/close-menu.svg">
        <div class="sidebar-actionsMobile">
          <div class="action"><img src="/auth-icon.svg"></div>
          <div class="action"><img src="/favorites-icon.svg"></div>
          <div class="action"><img src="/comparison-icon.svg"></div>
          <div class="action"><img src="/cart-icon.svg"></div>
        </div>
        <nav class="navbar-mobile">
          <div class="nav-category"><span class="nav-sectionSpan">Для геймеров</span><img src="/sub-sectors.svg"></div>
          <div class="nav-category"><span class="nav-sectionSpan">Смартфоны и гаджеты</span><img src="/sub-sectors.svg"></div>
          <div class="nav-category"><span class="nav-sectionSpan">Компьютеры и ноутбуки</span><img src="/sub-sectors.svg"></div>
          <div class="nav-category"><span class="nav-sectionSpan">Комплектующие для ПК</span><img src="/sub-sectors.svg"></div>
          <div class="nav-category"><span class="nav-sectionSpan">Компьютерная периферия</span><img src="/sub-sectors.svg"></div>
          <div class="nav-category"><span class="nav-sectionSpan">Сетевое оборудование</span><img src="/sub-sectors.svg"></div>
          <div class="nav-category"><span class="nav-sectionSpan">Офисная техника и мебель</span><img src="/sub-sectors.svg"></div>
          <div class="nav-category"><span class="nav-sectionSpan">Автовары</span><img src="/sub-sectors.svg"></div>
          <div class="nav-category"><span class="nav-sectionSpan">Товары для дома</span><img src="/sub-sectors.svg"></div>
          <div class="nav-category"><span class="nav-sectionSpan">Решение для бизнеса</span><img src="/sub-sectors.svg"></div>
        </nav>
      </div>
    `
};
