
import React from 'react'
import TagItem from '../../src/components/views/TagItem'
import { shallow } from 'enzyme'

describe('+++ TagItem --- Shallow Render React VIEW Component +++',()=>{
    const testName = "Программирование";
    const testColor = "rbg(5,5,5)";

    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<TagItem clickHandle={()=>{}} color={testColor} name={testName} />);
    })

    it('+++ Render the VIEW component', () => {
       expect(wrapper).toHaveLength(1)
    });

    it('+++ Contains right style', () => {
        let style = {
            "background": "rbg(5,5,5)"
        }
        expect(wrapper.find('div').prop('style')).toEqual(style);
    });

    it('+++ Contains SPAN name', () => {
        expect(wrapper.find('span').text()).toEqual(testName);
    });
});