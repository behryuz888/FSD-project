import { createLoader } from '../../ui/loader';

let isLoading = true;
let loaderEl = null;

export function showLoader() {
  if (loaderEl) return;

  loaderEl = createLoader();
  document.body.appendChild(loaderEl);
  isLoading = true;
}

export function hideLoader() {
  if (!loaderEl) return;

  loaderEl.remove();
  loaderEl = null;
  isLoading = false;
}

export function getLoadingState() {
  return isLoading;
}
