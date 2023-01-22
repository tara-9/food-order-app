import CartIcon from "../Cart/CartIcon"
import classes from "./HeaderCartButton.module.css"
import { useContext } from "react"
import CartContext from "../store/cart-context"
const HeaderCartButton = props => {
    const cartContext = useContext(CartContext)
    const numberOfitems = cartContext.items.reduce((currentNumber, item) => currentNumber+item.amount, 0)

    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}><CartIcon /></span>
        <span>Your cart</span>
        <span className={classes.badge}>{numberOfitems}</span>
    </button>
}

export default HeaderCartButton