import { useDispatch, useSelector } from "react-redux";
import MenuItemList from "./MenuItemList";
import { clearCart } from "../utils/cartSlice";


const Cart = ()=>{
const cartItems = useSelector((store)=> store.cart.items);

const dispatch = useDispatch();

const handleClearCart = ()=>{
    dispatch(clearCart());
};

    return (
            // Adding items to cart
        <div className=" text-center p-4 m-4">
            <h1 className="text-2xl font-extrabold">Cart</h1>
            <div className="w-6/12 m-auto">
                <MenuItemList item={cartItems}/>            
            </div>
            <button className="border border-black m-2 p-1 rounded-md bg-slate-200" onClick={handleClearCart}>
                Clear Cart</button>
        </div>
    )
};

export default Cart;
