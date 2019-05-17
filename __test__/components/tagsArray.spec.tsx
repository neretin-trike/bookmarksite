import React from "react"
import TagsArray from "../../src/components/views/TagsArray"
import { shallow } from "enzyme"

describe("+++ TagsArray --- Shallow Render React VIEW Component +++",()=>{
    const testTags = [0,1];
    const testArray = [0,1];
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<TagsArray array={testArray} tags={testTags} />);
    })

    it("+++ Render the VIEW component", () => {
       expect(wrapper).toHaveLength(1)
    });


    it("+++ Contains DIV containt right count children", () => {
        expect(wrapper.find("div").children()).toHaveLength(2);
    });
});