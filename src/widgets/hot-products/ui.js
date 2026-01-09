import { getHotProducts } from "./model.js";
import { initProductHover } from "../../shared/lib/animations/initProductHover";

export async function renderHotProducts(container) {
  const products = await getHotProducts();

  container.innerHTML = products.map(item => {
      console.log(item,"item")
    return `
    <a href="productPage?${item.slug}" class="newProduct-link">
      <article class="new-product">
        <div class="product-additionals">
          <img src="/favorites-icon.svg">
          <img src="/comparison-icon.svg">
        </div>

        <div class="product-imgWrapper">
          <img src="${item.img}">
        </div>

        <div class="product-wrapCart">
          <div class="product-information">
            <span>${item.category}</span>
            <p>${item.title}</p>
          </div>

          <div class="product-cartPrice">
            <span>${item.price}<br><p>с НДС</p></span>
            <button>в Корзину</button>
          </div>
        </div>
      </article>
    </a>
  `}).join("");

  console.log(products);

  initProductHover();
}
