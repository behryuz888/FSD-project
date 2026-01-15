import { navigate } from "../../app/router";

export function initHeaderNavigation() {
  document.querySelectorAll("[data-route]").forEach(el => {
    el.addEventListener("click", () => {
      navigate(el.dataset.route);
    });
  });
}