import React from 'react';

import Favicon from './Favicon';
import Caption from './Caption';
import InteractLayout from '../layouts/InteractLayout';
import DeleteButtonContainer from '../containers/DeleteButtonContainer';
import EditButtonContainer from '../containers/EditButtonContainer';
import ToggleButtonContainer from '../containers/ToggleButtonContainer';

import '../../styles/bookmark-item.css'

interface IProps {
    item: {
        faviconPath: string, 
        caption: string, 
        url: string, 
        createDate: string,
        tagArray: Array<any>
    },
    id: number
}

class BookmarkItem extends React.PureComponent<IProps> {
    render() {
        
        let {faviconPath, caption, url, createDate, tagArray} = this.props.item;
        let moreInfoData: object = { url, createDate, tagArray };

        return (
            <div className="bookmark-item">
                <Favicon path={faviconPath}/>
                <Caption url={url} caption={caption}/>
                <InteractLayout class="bookmark-item__interact">
                    <DeleteButtonContainer id={this.props.id}/> |
                    <EditButtonContainer id={this.props.id}/> |
                    <ToggleButtonContainer data={moreInfoData}/>
                </InteractLayout>
            </div>
        )
    }
} 

export default BookmarkItem;