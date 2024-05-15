import RestaurantCards from "../RestaurantCards";
import { render,screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardmocks.json";
import "@testing-library/jest-dom";

it("Should have render Restaurant Cards with passing props..",()=>{

    render(<RestaurantCards resData = {MOCK_DATA}/>);

    const name = screen.getByText("UBQ by Barbeque Nation");

    expect(name).toBeInTheDocument();

    
});