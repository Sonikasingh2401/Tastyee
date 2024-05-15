import Body from "../Body";
import { fireEvent, render,screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA);
        },
    });
});

it("Should Search restaurant list of Coffee by input box and clicking on the search button.", async ()=>{

    
    await act(async()=>
    render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
        )
    );
        const Searchbtn = screen.getByRole("button",{ name:"Search" });

        const SearchInput = screen.getByTestId("searchInput");
        fireEvent.change(SearchInput,{target:{value : "Coffee"}});
        fireEvent.click(Searchbtn);

        const cards = screen.getAllByTestId("resCard");

         expect(cards.length).toBe(2);

    });
    



