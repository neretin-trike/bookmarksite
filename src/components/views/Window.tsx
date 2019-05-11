import React from 'react';

import InteractLayout from '../layouts/InteractLayout';
import CloseButtonContainer from '../containers/CloseButtonContainer';
import SaveButtonContainer from '../containers/SaveButtonContainer';
import FieldGroupLayout from '../layouts/FieldGroupLayout';
import CaptionFieldContainer from '../containers/CaptionFieldContainer';
import URLFieldContainer from '../containers/URLFieldContainer';
import TagFieldContainer from '../containers/TagFieldContainer';

interface IProps {
    title: string
}

class Window extends React.PureComponent<IProps> {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <FieldGroupLayout>
                    <CaptionFieldContainer />
                    <URLFieldContainer />
                    <TagFieldContainer />
                </FieldGroupLayout>
                <InteractLayout>
                    <CloseButtonContainer />
                    <SaveButtonContainer />
                </InteractLayout>
            </div>
        )
    }
}

export default Window;
