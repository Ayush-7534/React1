export default function Cart({ cart, removeFromCart, totalAmount }) {

  if (cart.length === 0) {
    return (
      <div>
        <h3>Cart</h3>
        <p>Your cart is empty</p>
      </div>
    );
  }

  return (
    <div>
      <h3>Cart</h3>

      {cart.map((item, index) => (
        <div key={index}>
          <img
            src={item.image}
            alt={item.name}
            width="60"
          />

          <div>
            <h4>{item.name}</h4>
            <p>₹ {item.price}</p>
          </div>

          <button onClick={() => removeFromCart(index)}>
            Remove
          </button>

          <hr />
        </div>
      ))}

      <h4>Total: ₹ {totalAmount}</h4>
    </div>
  );
}