import { sum } from "../sum";

test ("Sum function should calculate the sum of the given two number : ", () =>{
    const result = sum(8,4);

    //Assertion - (means that we have to expect some result , it is a good practise to define assertion )
    expect(result).toBe(12);
});