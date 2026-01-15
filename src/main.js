import "./app/styles/index.scss";
import { Header } from "./widgets/header/ui";
import { Footer } from "./widgets/footer/ui";
import { initSidebar } from "./widgets/header/sidebar";
import { initHeaderNavigation } from "./widgets/header/navigation";
import { renderPage } from "./app/router";

document.querySelector("#app").innerHTML = `
  ${Header()}
  <main id="page"></main>
  ${Footer()}
`;

renderPage();
initSidebar();
initHeaderNavigation();