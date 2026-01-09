import "./styles.scss";

export function createLoader() {
  const loader = document.createElement('div');
  loader.className = 'loader';

  loader.innerHTML = `
    <div class="loader__spinner"></div>
    <span class="loader__text">Loading...</span>
  `;

  return loader;
}
