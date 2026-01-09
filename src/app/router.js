import { HomePage } from "../pages/home";
import { NotFoundPage } from "../pages/notFound";
import { Product } from "../pages/product";

const routes = {
  "/": HomePage,
  "/home": HomePage,
  "/productPage": Product,
};

export function router() {
  const path = window.location.pathname;
  const Page = routes[path] || NotFoundPage;
  console.log(window.location);
  return Page();
}

export function renderPage() {
  document.getElementById("page").innerHTML = router();
}

export function navigate(path) {
  window.history.pushState({}, "", path);
  renderPage();
}

window.addEventListener('popstate', () => {
  console.log('Popstate event triggered');
  renderPage();
});
