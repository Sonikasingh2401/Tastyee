import "@testing-library/jest-dom";
import { fireEvent, render , screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";

it("Should render the Header Component with a Login button",()=>{
    render (
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );

    const loginbutton = screen.getByRole("button");

    expect(loginbutton).toBeInTheDocument();

});

it("Should render the Header Component with cart items = 0",()=>{
    render (
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );

    const cartitems = screen.getByText("Cart (0 items)");
    //const cartitems = screen.getByText(/Cart/);   syntax of using Regex -- 
    //u can also use regex as well when you use getByText over here, it only finds "Cart" inside it 

    expect(cartitems).toBeInTheDocument();

});


//To Check the Login and Logout functionality in the Header Component.

it("Should change the login button to logout button on click of it",()=>{
    render (
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );

    const loginbutton = screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginbutton);

    const logoutbutton = screen.getByRole("button",{name: "Logout"});

    expect(logoutbutton).toBeInTheDocument();

});