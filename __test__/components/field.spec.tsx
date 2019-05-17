import React from "react"
import Field from "../../src/components/views/Field"
import { shallow } from "enzyme"

describe("+++ Field --- Shallow Render React VIEW Component +++",()=>{
    const testPlaceholder = "Название тега";
    const testName = "tag";
    const testValue = "Программирование";
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<Field 
            changeHandle={()=>{}}
            placeholder={testPlaceholder}
            name={testName}
            value={testValue}
        />);
    })

    it("+++ Render the VIEW component", () => {
       expect(wrapper).toHaveLength(1)
    });

    it("+++ Contains Field placeholder", () => {
        expect(wrapper.find("input").prop("placeholder")).toEqual(testPlaceholder);
    });

    it("+++ Contains Field name", () => {
        expect(wrapper.find("input").prop("name")).toEqual(testName);
    });

    it("+++ Contains Field value", () => {
        expect(wrapper.find("input").prop("value")).toEqual(testValue);
    });
});