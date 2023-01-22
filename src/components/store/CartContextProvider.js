import React, { useReducer } from "react";
import CartContext from "./cart-context";
const defaultCartContext = {
    items:[],
    totalAmount:0
}
const cartReducer = (state,action) => {
    if(action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item)
        const updatedAmount = state.totalAmount + action.item.price * action.item.amount
        return {
            items:updatedItems,
            totalAmount: updatedAmount
        }
    }
    return defaultCartContext
}
const CartProvider = props => {
    const [cartState, dispatchCartContext] = useReducer(cartReducer, defaultCartContext)

    const addCartItemHandler = item => dispatchCartContext({type:'ADD', item:item})
    const removecartItemHandler= id => dispatchCartContext({type:'REMOVE', id:id})
    
    const cartContext = {
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem: addCartItemHandler,
        removeItem: removecartItemHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider