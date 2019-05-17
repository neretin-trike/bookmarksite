import React from "react"
import Caption from "../../src/components/views/Caption"
import { shallow } from "enzyme"

describe("+++ Caption --- Shallow Render React VIEW Component +++",()=>{
    const testUrl = "https://";
    const testCaption = "Назавние закладки";
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<Caption caption={testCaption} url={testUrl}/>);
    })
    
    it("+++ Render the VIEW component", () => {
       expect(wrapper).toHaveLength(1)
    });
    
    it("+++ Contains Caption url", () => {
        expect(wrapper.prop("href")).toEqual(testUrl)
    });

    it("+++ Contains Caption caption", () => {
        expect(wrapper.text()).toEqual(testCaption)
    });
});