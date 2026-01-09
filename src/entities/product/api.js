import { httpGet } from "../../shared/api/http";

export function fetchHotProducts() {
  return httpGet(
    "https://api.brandstore.uz/api/home?type=hot_products"
  );
}

export function fetchProductBySlug(slug) {
  return httpGet(
    `https://api.brandstore.uz/api/products?slug=${slug}`
  );
}

export function fetchSimilarProducts() {
  return httpGet(
    "https://api.brandstore.uz/api/home?type=hot_products"
  );
}