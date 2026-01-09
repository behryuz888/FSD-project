import { fetchHotProducts } from "../../entities/product/api.js";
import { showHotProduct } from "../../entities/product/show-product.js";

export async function getHotProducts() {
  const response = await fetchHotProducts();

  if (!response.data.product_request) {
    return;
  }
  return response.data.product_request.map(showHotProduct);
}
