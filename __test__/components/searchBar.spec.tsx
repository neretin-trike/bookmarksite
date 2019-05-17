
import React from 'react'
import SearchBar from '../../src/components/views/SearchBar'
import { shallow } from 'enzyme'

describe('+++ SearchBar --- Shallow Render React VIEW Component +++',()=>{
    const testValue = "Программирование";
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<SearchBar changeHandle={()=>{}} value={testValue} />);
    })

    it('+++ Render the VIEW component', () => {
       expect(wrapper).toHaveLength(1)
    });

    it('+++ Contains SearchBar value', () => {
        expect(wrapper.find('input').prop('value')).toEqual(testValue);
    });
});