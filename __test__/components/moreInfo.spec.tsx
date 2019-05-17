
import React from 'react'
import MoreInfo from '../../src/components/views/MoreInfo'
import { shallow } from 'enzyme'

describe('+++ MoreInfo --- Shallow Render React VIEW Component +++',()=>{
    const testData = {
        url: "",
        createDate: "",
        tagArray: []
    }
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<MoreInfo data={testData}/>);
    })

    it('+++ Render the VIEW component', () => {
       expect(wrapper).toHaveLength(1)
    });

    it('+++ Contains URL contain url', () => {
        let url = `URL: ${testData.url}`;
        expect(wrapper.find('div .more-info__caption').text()).toEqual(url);
    });

    it('+++ Contains TIME contain url', () => {
        let createDate = `Дата создания: ${testData.createDate}`;
        expect(wrapper.find('time .more-info__caption').text()).toEqual(createDate);
    });
});