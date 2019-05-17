
import React from 'react'
import ModalWindow from '../../src/components/views/ModalWindow'
import { shallow } from 'enzyme'

describe('+++ ModalWindow --- Shallow Render React VIEW Component +++',()=>{
    const testTitle = "Добавить новую закладку";
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<ModalWindow title={testTitle}/>);
    })

    it('+++ Render the VIEW component', () => {
       expect(wrapper).toHaveLength(1)
    });

    it('+++ Contains Window title', () => {
        expect(wrapper.find('Window').prop('title')).toEqual(testTitle)
    });
});