import { MENU_URL } from "./constants";
import { useState,useEffect } from "react";

const useRestaurantMenu = (resId) =>{

    const [resInfo,setresInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () =>{
    const data = await fetch (MENU_URL + resId);
    const json = await data.json();
    console.log(json);
    setresInfo(json.data);
    }

    return resInfo;
}

export default useRestaurantMenu;