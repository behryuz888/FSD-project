import { HomePage } from "../pages/home";
import { NotFoundPage } from "../pages/notFound";
import { Product } from "../pages/product";
import { ForGamersUI } from "../pages/categories/forGamers/ui";

const routes = {
  "/": HomePage,
  "/home": HomePage,
  "/productPage": Product,
  "/categories/for-gamers": ForGamersUI,
};

export function router() {
  const path = window.location.pathname;
  const Page = routes[path] || NotFoundPage;
  return Page();
}

export function renderPage() {
  document.getElementById("page").innerHTML = router();
}

export function navigate(path) {
  window.history.pushState({}, "", path);
  renderPage();
}

window.addEventListener("popstate", renderPage);