import { fireEvent, render , screen  } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import { act } from "react-dom/test-utils";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

global.fetch = jest.fn(()=> {
    return Promise.resolve({
        json : ()=>{
            return Promise.resolve(MOCK_DATA_NAME);
        },
    });
});


it("Should load the Restaurant Menu Component and add the item to the Cart",async ()=>{
    await act (async ()=>{
        render(
        <Provider store={appStore}>
        <RestaurantMenu />
        </Provider>)
    });

    const AccordianHeader = screen.getByText("Recommended (20)");
    fireEvent.click(AccordianHeader);

    expect(screen.getAllByTestId("FoodItems").length).toBe(20);

});