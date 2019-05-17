
import React from 'react'
import Window from '../../src/components/views/Window'
import { shallow } from 'enzyme'

describe('+++ Window --- Shallow Render React VIEW Component +++',()=>{
    const testTitle = "Редактирование закладки";
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<Window title={testTitle}/>);
    })

    it('+++ Render the VIEW component', () => {
       expect(wrapper).toHaveLength(1)
    });

    it('+++ Contains Window testTitle', () => {
        expect(wrapper.find("h2").text()).toEqual("Редактирование закладки")
    });
});