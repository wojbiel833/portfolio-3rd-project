/* selectors */
export const getProductsFromCart = ({ cart }, productId) =>
  cart.filter(product => product.id === productId);
