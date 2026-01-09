import "./app/styles/index.scss";
import { Header } from "./widgets/header/ui";
import { Footer } from "./widgets/footer/ui";
import { initSidebar } from "./widgets/header/sidebar.js";
import { renderPage } from "./app/router.js";

document.querySelector("#app").innerHTML = `
  ${Header()}
  <main id="page"></main>
  ${Footer()}
`;

renderPage();
initSidebar();