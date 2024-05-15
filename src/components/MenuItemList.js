import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";


const MenuItemList = ({item,dummy})=>{

    const dispatch = useDispatch();

    const handleAddItem = (item)=>{
        //on click i want to dispatch an action
        dispatch(addItems(item));
    };
    
    return (
            <div>
            {item.map((item)=>(
            <div key={item.card.info.id} 
                data-testid="FoodItems"
                className="p-2 m-2 border-b-2 text-left flex">
                <div className="w-9/12">
                <div className="py-2 font-semibold">
                <span>{item.card.info.name}</span>
                <span>  - ₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
            </div>
                <p className="text-xs">{item.card.info.description}</p>
                </div>
                <div className="w-3/12 ">
                    <img src={CDN_URL + item.card.info.imageId} className="w-full"/>
                    <button className="px-5 m-2 bg-white shadow-lg text-green-700 rounded-lg"
                    onClick={ () => handleAddItem(item)}
                    >
                        Add +</button>
                </div>
        </div>
            ))}
        </div>
    );
};

export default MenuItemList;