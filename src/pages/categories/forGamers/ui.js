import "./styles.scss";
import { forGamersSubcategories } from "./mock";

export function ForGamersUI() {
  return `
    <div class="wrapBread">
      <div class="wrapBread-routeCart">
        <a href="/"><h3 class="wrapBread-returnMain">Главная</h3></a>
        <img src="/arrow.svg">
        <h3 class="wrapBread-currentRoute" data-route="/categories/for-gamers">
          Для геймеров
        </h3>
      </div>
    </div>

    <div class="forGamers-subcategories">
      <div class="forGamers-innerItems">
        ${forGamersSubcategories
          .map(
            (item) => `
              <div class="forGamers-innerSubcategory" data-id="${item.id}">
                <span class="forGamers-span">${item.title}</span>
                <img 
                  class="forGamers-productImg" 
                  src="${item.image}" 
                  alt="${item.title}"
                >
              </div>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}
