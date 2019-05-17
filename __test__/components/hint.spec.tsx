
import React from 'react'
import Hint from '../../src/components/views/Hint'
import { shallow } from 'enzyme'

describe('+++ Hint --- Shallow Render React VIEW Component +++',()=>{
    const testError = {
        "caption":"ошибка"
    };
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<Hint error={testError} />);
    })

    it('+++ Render the VIEW component', () => {
       expect(wrapper).toHaveLength(1)
    });

    it('+++ Generate right count li element', () => {
        expect(wrapper.find('li')).toHaveLength(1)
    });
});