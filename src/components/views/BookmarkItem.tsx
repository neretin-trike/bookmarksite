import React from 'react';

import Favicon from './Favicon';
import Caption from './Caption';
import InteractLayout from '../layouts/InteractLayout';
import DeleteButtonContainer from '../containers/DeleteButtonContainer';
import EditButtonContainer from '../containers/EditButtonContainer';
import ToggleButtonContainer from '../containers/ToggleButtonContainer';
import MoreInfo from './MoreInfo';

interface IProps {
    item: {
        faviconPath: string, 
        caption: string, 
        url: string, 
        createDate: string,
        tagArray: Array<any>
    }
}

class BookmarkItem extends React.PureComponent<IProps> {
    render() {
        
        let {faviconPath, caption, url, createDate, tagArray} = this.props.item;
        let moreInfoData: object = { url, createDate, tagArray };

        return (
            <div>
                <Favicon path = {faviconPath}/>
                <Caption caption = {caption}/>
                <InteractLayout>
                    <DeleteButtonContainer />
                    <EditButtonContainer />
                    <ToggleButtonContainer />
                </InteractLayout>
                <MoreInfo data = {moreInfoData}/>
            </div>
        )
    }
} 

export default BookmarkItem;