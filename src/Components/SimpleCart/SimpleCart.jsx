import { useSelector } from 'react-redux';

function SimpleCart() {
  const cart = useSelector(state => state.cart.cart);
  console.log('SimpleCart: cart', cart)

  return (
    <div className="simpleCart">
      <h2>Cart</h2>
      {cart.map((item, idx) => (
        <p key={idx}>{item.name}</p>
      ))}
    </div>
  );
}

export default SimpleCart;