export const getCart = () => {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
};

export const addItemToCart = (item) => {
  const cart = getCart();
  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
  window.dispatchEvent(new Event('storage'));
};


export const removeFromCart = (id) => {
  const cart = getCart();
  const updatedCart = cart.filter(item => item.id !== id);
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  window.dispatchEvent(new Event('storage'));
};

