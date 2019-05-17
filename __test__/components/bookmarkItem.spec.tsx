
import React from 'react'
import BookmarkItem from '../../src/components/views/BookmarkItem'
import { shallow } from 'enzyme'

describe('### BookmarkItem --- Shallow Render React VIEW Component ###',()=>{
    const testID = 0;
    const testItem = {
		faviconPath: "http://...",
		caption: "Разбор задач финала Яндекс.Алгоритма 2017",
		url: "https://habr.com/company/yandex/blog/334250/",
		createDate: "20.01.2018 15:48",
	    tagArray: [0, 1, 2]
    };
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<BookmarkItem id={testID} item={testItem}/>);
    })

    it('+++ Render the VIEW component', () => {
       expect(wrapper).toHaveLength(1)
    });
    
    it('+++ Contains Favicon path', () => {
        let favicon = testItem.faviconPath;
        expect(wrapper.find('Favicon').prop('path')).toEqual(favicon)
    });

    it('+++ Contains Caption url', () => {
        let url = testItem.url;
        expect(wrapper.find('Caption').prop('url')).toEqual(url)
    });

    it('+++ Contains Caption caption', () => {
        let caption = testItem.caption;
        expect(wrapper.find('Caption').prop('caption')).toEqual(caption)
    });

    it('+++ Contains VIEW 3 children', () => {
        expect(wrapper.children()).toHaveLength(3)
    });
});