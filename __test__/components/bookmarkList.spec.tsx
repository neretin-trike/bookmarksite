
import React from 'react'
import BookmarkList from '../../src/components/views/BookmarkList'
import { shallow } from 'enzyme'

describe('### BookmarkList --- Shallow Render React VIEW Component ###',()=>{
    let testItemArray = [];
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<BookmarkList bookMarks={testItemArray}/>);
    })

    it('+++ Render the VIEW component', () => {
       expect(wrapper).toHaveLength(1)
    });

    it('+++ Correct children render', () => {
        expect(wrapper.find('section').text()).toEqual("Пока нет ни одной закладки :(")
    });

});