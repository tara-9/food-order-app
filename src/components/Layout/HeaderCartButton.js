import CartIcon from "../Cart/CartIcon"
import classes from "./HeaderCartButton.module.css"
import { useContext, useEffect, useState } from "react"
import CartContext from "../store/cart-context"
const HeaderCartButton = props => {
    const [buttonAnimation, setButttonAnimation] = useState(false)
    const { items } = useContext(CartContext)
    useEffect(
        () => {
            if(items.length === 0) {
                return
            }
            setButttonAnimation(true)
            const timer = setTimeout(() => setButttonAnimation(false), 300)

            return () => clearTimeout(timer)
        }, [items]
        
    )
    const numberOfitems = items.reduce((currentNumber, item) => currentNumber+item.amount, 0)

    const btnClass = `${classes.button} ${buttonAnimation ? classes.bump : ''}`

    return <button className={btnClass} onClick={props.onClick}>
        <span className={classes.icon}><CartIcon /></span>
        <span>Your cart</span>
        <span className={classes.badge}>{numberOfitems}</span>
    </button>
}

export default HeaderCartButton