import React from 'react';

import InteractLayout from '../layouts/InteractLayout';
import CloseButtonContainer from '../containers/CloseButtonContainer';
import SaveButtonContainer from '../containers/SaveButtonContainer';
import FieldGroupLayout from '../layouts/FieldGroupLayout';
import CaptionFieldContainer from '../containers/CaptionFieldContainer';
import URLFieldContainer from '../containers/URLFieldContainer';
import TagFieldContainer from '../containers/TagFieldContainer';

import '../../styles/window.css';

interface IProps {
    title: string
}

class Window extends React.PureComponent<IProps> {
    render() {
        return (
            <div className="window">
                <h2 className="window__title">{this.props.title}</h2>
                <FieldGroupLayout>
                    <CaptionFieldContainer />
                    <URLFieldContainer />
                    <TagFieldContainer />
                </FieldGroupLayout>
                <InteractLayout class="window__interact">
                    <CloseButtonContainer />
                    <SaveButtonContainer />
                </InteractLayout>
            </div>
        )
    }
}

export default Window;
