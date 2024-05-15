import React, { lazy , Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from "./components/Cart";

const GroceryStore = lazy(()=> import("./components/GroceryStore"));

const About = lazy(()=> import ("./components/About"));

const AppLayout = () =>{

    const [userName,setuserName] = useState();

    //authentication code
    /*Make an API call to receives username and Password  */
    useEffect(()=>{
        const data = {
            name: "Sonika Singh",
        };
        setuserName(data.name);
    },[]);

    return (
        <Provider store = {appStore}>
        <UserContext.Provider value={{LoggedInUser: userName, setuserName}}>
            <div className="app">
                <Header/>
                <Outlet/>
            </div>
        </UserContext.Provider>
        </Provider>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/about",
                element: <Suspense fallback = {<Shimmer/>}><About/></Suspense>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>,
            },
            {
                path: "/GroceryStore",
                element: (
                <Suspense fallback ={<h1>Wait..Loading..!! </h1>}><GroceryStore/></Suspense>
                )
            },
            {
                path: "/cart",
                element: <Cart/>,
            
            },

        ],
        errorElement: <ErrorPage/>,
    },
    
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);