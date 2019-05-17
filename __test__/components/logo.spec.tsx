
import React from 'react'
import Logo from '../../src/components/views/Logo'
import { shallow } from 'enzyme'

describe('+++ Logo --- Shallow Render React VIEW Component +++',()=>{
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<Logo />);
    })

    it('+++ Render the VIEW component', () => {
       expect(wrapper).toHaveLength(1)
    });
});