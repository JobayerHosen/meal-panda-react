const addToCart = (cart, setCart, meal) => {
  const newCart = [...cart, meal];
  setCart(newCart);
};

export default addToCart;
