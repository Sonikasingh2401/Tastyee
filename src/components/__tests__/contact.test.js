import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load Contact us component", ()=>{
    render (<Contact/>);

    //Querying
    const heading = screen.getByRole("heading");

    //Assertion
    expect (heading).toBeInTheDocument();
});

test("Should load Button inside my Contact component", ()=>{
    render (<Contact/>);

    //Querying
    const button = screen.getByRole("button");

    //Assertion
    expect (button).toBeInTheDocument();
});

test("Should load input name inside my Contact component", ()=>{
    render (<Contact/>);

    const inputName = screen.getByPlaceholderText("name");

    //Assertion
    expect (inputName).toBeInTheDocument();
});

test("Should load all the input boxes inside my Contact component", ()=>{
    render (<Contact/>);

    const inputBoxes = screen.getAllByRole("textbox");
    //console.log(inputBoxes.length);

    //Assertion
    expect(inputBoxes.length).toBe(3);

});