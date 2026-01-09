import "./styles.scss";
import { fetchProductBySlug } from "../../entities/product/api";
import { createLoader } from "../../shared/ui/loader";

export function Product() {
  const slug = window.location.search.substring(1);

  setTimeout(() => renderProduct(slug));

  return `
    <div class="productSingle-wrapper">
      <div class="product-content"></div>
    </div>
  `;
}

async function renderProduct(slug) {
  const wrapper = document.querySelector(".productSingle-wrapper");
  const content = wrapper?.querySelector(".product-content");
  if (!wrapper || !content) return;

  const html = document.documentElement;
  const loader = createLoader();

  html.classList.add("active");
  wrapper.appendChild(loader);
  try {
    const res = await fetchProductBySlug(slug);
    const product = res?.data;
    if (!product) {
      content.innerHTML = `<div class="error">Товар не найден</div>`;
      return;
    }
    content.innerHTML = `
      <div class="routeCart">
        <a href="/"><h3 class="product-returnMain">Главная</h3></a>
        <img src="/arrow.svg">
        <h3 class="product-returnMain">Товары для дома</h3>
        <img src="/arrow.svg">
        <h3 class="product-currentRoute">${product.name}</h3>
      </div>
      <div class="product-information">
        <div class="product-pictures">
          <div class="product-smallImages">
            ${product.images
              .map(
                img =>
                  `<img class="product-additionalImage" src="${img.types.small_default}">`
              )
              .join("")}
          </div>
          <div class="product-mainPicWrapper">
            <img class="product-pictureMain" src="${product.images[0].types.home_default}">
          </div>
        </div>
        <div class="product-aboutProduct">
          <div class="product-priceInfo">
            <h2 class="product_nameProduct">${product.name}</h2>
            <div class="product_wrapPrice">
              <span class="product-priceSpan">${product.random_shop.price}</span>
              <span class="product-taxSpan">| с учетом НДС</span>
            </div>
            <div class="product_cashback-warranty">
              <div class="product_cashbackItem">
                <img src="/cashback.svg">
                <span>Cashback<br><p>${product.cashback}</p></span>
              </div>
              <div class="product_warrantyTime">
                <span>Гарантий</span>
                <span class="product_spanWarranty">${product.random_shop.warranty_period}</span>
              </div>
            </div>
          </div>
          <div class="product-orderBtns">
            <div class="product_specialBtns">
              <button class="product_addCart">в Корзину</button>
              <div class="product_btnFeatures">
                <button class="product_favoritesCompare">
                  <img src="/favorites-icon.svg">
                </button>
                <button class="product_favoritesCompare">
                  <img src="/comparison-icon.svg">
                </button>
              </div>
            </div>
            <button class="product_installments">Купить в рассрочку</button>
          </div>
        </div>
      </div>
    `;
  } catch (err) {
    content.innerHTML = `<div class="error">Ошибка загрузки товара</div>`;
    console.error(err);
  } finally {
    html.classList.remove("active");
    loader.remove();
  }
}
