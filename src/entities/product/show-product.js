export function showHotProduct(apiProduct) {
  const shop = apiProduct.random_shop;

  return {
    slug: apiProduct.slug,
    img: apiProduct.images[0].types.home_default || "",
    category: apiProduct.class.name || "",
    title: apiProduct.name,
    price: `${shop.price} сум`,
  };
}
