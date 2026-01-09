import { gsap } from "gsap";

export function initProductHover() {
  const productItems = document.querySelectorAll('.new-product');

  productItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      gsap.to(item, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.inOut',
      });
    });

    item.addEventListener('mouseleave', () => {
      gsap.to(item, {
        scale: 1,
        duration: 0.3
      });
    });
  });
}
