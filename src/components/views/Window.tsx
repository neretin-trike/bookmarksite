import React, { useEffect, useState } from 'react';

import InteractLayout from '../layouts/InteractLayout';
import CloseButtonContainer from '../containers/CloseButtonContainer';
import SaveButtonContainer from '../containers/SaveButtonContainer';
import FieldGroupLayout from '../layouts/FieldGroupLayout';
import CaptionFieldContainer from '../containers/CaptionFieldContainer';
import URLFieldContainer from '../containers/URLFieldContainer';
import TagFieldContainer from '../containers/TagFieldContainer';
import { useAnimation } from '../../hooks/useAnimation';

import '../../styles/window.css';

interface IProps {
    title: string
}
const Window: React.FunctionComponent<IProps> = (props) => {
    let theme = useAnimation("window_state_show");

    return (
        <div className={`window ${theme}`}>
            <h2 className="window__title">{props.title}</h2>
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

export default Window;
