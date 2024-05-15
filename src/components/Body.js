import RestaurantCards from "./RestaurantCards";
import { useEffect, useState ,useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

 
const Body = () =>{

    const [ListOfRestaurants,setListOfRestaurants] = useState([]);
    const [FilteredRestaurants,setFilteredRestaurants] = useState([]);

    const [searchText,setsearchText] = useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1308572&lng=78.0549635&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    // Optional Chaining
        const json = await data.json();
        console.log(json);
     console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

     setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    };
    const OnlineStatus = useOnlineStatus();
    
    if(OnlineStatus === false) return (
    <h1>Looks like you are not connected to Internet!! Offline </h1>
    );  

    const {setuserName, LoggedInUser} = useContext(UserContext);    
//Conditional Rendering--
    
    return ListOfRestaurants.length === 0 ? (<Shimmer/>):
    (
        <div className="body">
            <div className="flex m-3 p-2">
                <div className="searchInput px-4 m-3 pl-80">
                    <input type="text" data-testid="searchInput" className="border border-solid border-black w-96" value={searchText}
                    onChange={(e)=>{
                        setsearchText(e.target.value);
                        }}
                    />
                    <button className = "px-4 py-1 m-2 bg-gray-200 rounded-lg"
                    onClick={()=>{
                        console.log(searchText);
                        
                        const FilteredRestaurantList = ListOfRestaurants.filter(
                            (res)=> res.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredRestaurants(FilteredRestaurantList);
                            console.log(FilteredRestaurantList);
                           
                        } }
                        >Search
                    </button>
                </div>
               
                <div className="px-2 m-3">
                    <button className="p-1 m-2 bg-red-200 rounded-lg"
                    onClick={() => {
                        const FilteredList = ListOfRestaurants.filter((res) => res.info?.avgRating > 4);
                        setFilteredRestaurants(FilteredList);  
                        }}>
                        Top rated Restaurants  
                    </button>
                </div>
                <div className="p-2 m-1">
                <label>Username : </label>
                    <input className="border border-black p-2"  value={LoggedInUser} 
                    onChange={(e)=> setuserName(e.target.value)}/>
            </div>
            </div>

            <div>
            <hr className="h-px my-8 bg-black border-2"></hr> 
            
            <div className="flex flex-wrap mx-10 my-3">           
                {FilteredRestaurants.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id} >
                    <RestaurantCards  resData={restaurant} />
                    </Link>
                ))}
            </div>   
            </div>
        </div> 
    );
};


export default Body;
