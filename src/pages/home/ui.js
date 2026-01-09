import "./styles.scss";
import { renderHotProducts } from "../../widgets/hot-products/ui";
import { createLoader } from "../../shared/ui/loader";

export function HomePage() {
  requestAnimationFrame(() => renderHome());

  return `
    <main class="home">
      <section class="new-products hot-products">
        <header class="newProduct-title">
          <div class="newProduct-titleDescription">
            <img class="newTitle-image" src="/fire-icon.svg">
            <h2 class="newTitle-span">Горящие<br>предложения</h2>
          </div>
          <button class="newProduct-allProducts">Смотреть все</button>
        </header>
        <section class="newProducts-feedWrapper"></section>
      </section>

      <section class="popular-category">
        <header class="popularCategory-title">
          <img class="populars-image" src="/popular-burger.svg">
          <h2 class="populars-span">Популярные категории</h2>
        </header>
        <section class="popularCategory-wrapCards">
          <div class="popularCategory-card-one">
            <p class="popularCategory-cardSpan">Телефоны и планшеты</p>
            <img class="popularCategory-productImage" src="/tablet-product.svg">
          </div>
          <div class="popularCategory-card-two">
            <p class="popularCategory-cardSpan">Товары для офиса</p>
            <img class="popularCategory-productImage" src="/officeFurniture-product.svg">
          </div>
          <div class="popularCategory-card-one">
            <p class="popularCategory-cardSpan">Оргтехника</p>
            <img class="popularCategory-productImage" src="/powerbank-product.svg">
          </div>
          <div class="popularCategory-card-two">
            <p class="popularCategory-cardSpan">Аксессуары</p>
            <img class="popularCategory-productImage" src="/airpods-product.svg">
          </div>
          <div class="popularCategory-card-one">
            <p class="popularCategory-cardSpan">Для геймеров</p>
            <img class="popularCategory-productImage" src="/headphones-product.svg">
          </div>
          <div class="popularCategory-card-two">
            <p class="popularCategory-cardSpan">Ноутбуки</p>
            <img class="popularCategory-productImage" src="/laptop-product.svg">
          </div>
          <div class="popularCategory-card-one">
            <p class="popularCategory-cardSpan">Компьютеры</p>
            <img class="popularCategory-productImage" src="/computer-product.svg">
          </div>
          <div class="popularCategory-card-two">
            <p class="popularCategory-cardSpan">Техника для дома</p>
            <img class="popularCategory-productImage" src="/camera-product.svg">
          </div>
        </section>
      </section>

      <section class="new-products">
        <header class="newProduct-title">
          <div class="newProduct-titleDescription">
            <img class="newTitle-image" src="/new-feed.svg">
            <h2 class="newTitle-span">НОВИНКИ</h2>
          </div>
          <button class="newProduct-allProducts">Смотреть все</button>
        </header>
        <section class="newProducts-feedWrapper"></section>
      </section>
    </main>
  `;
}

async function renderHome() {
  const wrapper = document.querySelector(".home");
  if (!wrapper) return;

  const html = document.documentElement;
  const loader = createLoader();

  html.classList.add("active");
  wrapper.appendChild(loader);

  try {
    const hotProductsContainers = document.querySelectorAll(
      ".newProducts-feedWrapper"
    );

    for (const container of hotProductsContainers) {
      await renderHotProducts(container);
    }
  } catch (err) {
    console.error("[HomePage] Error rendering hot products:", err);
  } finally {
    html.classList.remove("active");
    loader.remove();
  }
}
