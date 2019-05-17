import React from "react"
import Button from "../../src/components/views/Button"
import { shallow } from "enzyme"

describe("+++ Button --- Shallow Render React VIEW Component +++",()=>{
    const testTitle = "Подсказка для кнопки";
    const testName = "Добавить закладку";
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<Button name="{testName}" title="{testTitle}" clickHandle={()=>{}}/>);
    })

    it("+++ Render the DUMB component", () => {
       expect(wrapper).toHaveLength(1)
    });
    
    it("+++ Contains title", () => {
        expect(wrapper.find("button").prop("title")).toEqual("{testTitle}")
    });

    it("+++ Contains name", () => {
        expect(wrapper.find("button").text("name")).toEqual("{testName}")
    });
});