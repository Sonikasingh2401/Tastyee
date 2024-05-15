import { CDN_URL } from "../utils/constants";

const RestaurantCards = (props) =>{
    const {resData} = props;

    const{
         cloudinaryImageId,
         name,
         cuisines,
         avgRating,
        costForTwo,
        locality,
        sla,
     } = resData?.info;

    return(
        <div data-testid="resCard" className="p-3 m-4 w-[250] rounded-sm bg-gray-200 hover:bg-blue-200 h-auto">
            <img className="rounded-lg" alt="res-logo" src={CDN_URL + cloudinaryImageId}/>
            <h2 className="font-bold py-2 text-lg">{name}</h2>
            <h4 className="font-bold text-green-700">{avgRating} ⭐</h4>
            <h4 className="font-semibold"> ⌚ {sla.slaString}</h4>
            <h4 className="font-semibold">{costForTwo}</h4>
            <h4 className="text-slate-700">{cuisines.join(", ")}</h4>
            <h4 className="text-slate-700">{locality} </h4>
        </div>
    );
};


export default RestaurantCards;