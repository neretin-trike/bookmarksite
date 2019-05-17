
import React from 'react'
import Favicon from '../../src/components/views/Favicon'
import { shallow } from 'enzyme'

describe('+++ Favicon --- Shallow Render React VIEW Component +++',()=>{
    const testPath = "https://";
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<Favicon path={testPath}/>);
    })

    it('+++ Render the VIEW component', () => {
       expect(wrapper).toHaveLength(1)
    });

    it('+++ Contains Favicon path', () => {
        expect(wrapper.find('img').prop('src')).toEqual(testPath)
    });
});