import { useState , useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () =>{

    const [btnName,setbtnName] = useState("Login "); 
    const OnlineStatus = useOnlineStatus();

    const {LoggedInUser} = useContext(UserContext);

    const cartItems = useSelector((store)=> store.cart.items);
    console.log(cartItems);

    return (
        <div className="flex justify-between bg-purple-300">
            <div className="logo-container">
                <img className="pl-4 w-36" src={LOGO_URL}/>
            </div>
            <div className="item-center">
                <ul className="flex p-7 m-7">
                    <li className="px-5 text-black hover:text-orange-400 font-bold">Status: {OnlineStatus ? "✅" : "🔴"}</li>
                    <li className="px-5 text-black hover:text-orange-400 font-bold"><Link to = "/">Home</Link></li>
                    <li className="px-5 text-black hover:text-orange-400 font-bold"><Link to = "/about">About us</Link></li>
                    <li className="px-5 text-black hover:text-orange-400 font-bold"><Link to = "/contact">Contact Us</Link></li>
                    <li className="px-5 text-black hover:text-orange-400 font-bold"><Link to ="/GroceryStore">Grocery Store</Link></li>
                    <li className="px-5 text-black hover:text-orange-400 font-bold"><Link to = "/cart">Cart ({cartItems.length} items)</Link></li>

                    <button className=" font-bold login" 
                    onClick = {()=>{ btnName === "Login" ?
                        setbtnName ("Logout"):
                        setbtnName ("Login"); }
                     }
                        >{btnName}</button>
                    <li className="font-bold"> User : {LoggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};


export default Header;


