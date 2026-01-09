import "./styles.scss";

export function NotFoundPage() {
  return `
    <main class="notFound-wrapper">
      <nav class="routeCart">
        <a href="/"><h3 class="notFound-returnMain">Главная</h3></a>
        <img src="/arrow.svg">
        <h3 class="notFound-currentRoute">@$@$#@$%</h3>
      </nav>
      <section class="itemPart">
        <div class="notFound-container404">
          <div class="notFound-imageWrap">
            <img src="/notFound.svg">
          </div>
          <div class="notFound-contentSection">
            <h1>404</h1>
            <div class="returnHome">
              <p>К сожалению, указанная страница не найдена.</p>
              <a href="/"><button>Вернуться на главную</button></a>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
}
