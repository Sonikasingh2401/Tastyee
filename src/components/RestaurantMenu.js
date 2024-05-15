import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuCategory from "./MenuCategory";
import { useState } from "react";

const RestaurantMenu = ()=>{
const {resId} = useParams();
const resInfo = useRestaurantMenu(resId);

const [showIndex,setshowIndex] = useState(null);

if (resInfo === null ) return (<Shimmer/>);

    const {name, cuisines , avgRating, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const Categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.
    filter((c)=>c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    
     return (
        <div className="text-center">
            <h1 className="text-2xl font-bold m-5">{name}</h1>
            <h4 className="text-lg font-semibold m-2">{avgRating}⭐ - {costForTwoMessage}</h4>
            <h4 className="text-gray-600 m-2">{cuisines.join(" , ")}</h4>
            {/* Making our own Categories accordians */}
            {Categories.map((category,index)=>
            (<MenuCategory                      //controlled component
                key={category?.card?.card?.title}
                data={category?.card?.card}
                showItem={index === showIndex ? true : false}
                setshowIndex = {() => setshowIndex(index)}
                />)
            )}
           
        </div>
     );
};

export default RestaurantMenu;