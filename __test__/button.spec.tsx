
import React from 'react'
import Button from '../src/components/views/Button'
import { shallow } from 'enzyme'

describe('>>>Button --- Shallow Render REACT COMPONENTS',()=>{
    let wrapper
    const output = 10

    beforeEach(()=>{
        wrapper = shallow(<Button name="жоп" title="витя" clickHandle={null}/>);
    })

    it('+++ render the DUMB component', () => {
       expect(wrapper).toHaveLength(1)
    });
    

    it('+++ contains output', () => {
        expect(wrapper.find('button').prop('title')).toEqual("витя")
    });

});