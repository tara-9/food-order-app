import classes from "./Cart.module.css"
import Modal from "../UI/Modal";
import CartContext from "../store/cart-context";
import { useContext } from "react";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartContext = useContext(CartContext)
  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`
  const hasItem = cartContext.items.length > 0
  const addItemHandler = item => cartContext.addItem({...item, amount:1})
  const removeItemHandler = id => {cartContext.removeItem(id)}
  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartContext.items.map(item => <CartItem 
      name={item.name} 
      price={item.price} 
      amount={item.amount} 
      onAdd={addItemHandler.bind(null, item)} 
      onRemove={removeItemHandler.bind(null, item.id)} />)}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
  
  export default Cart;