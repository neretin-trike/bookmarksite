import React from 'react';

import Window from './Window';

import '../../styles/modal-window.css'

interface IProps {
    title: string
}

class ModalWindow extends React.PureComponent<IProps> {
    render() {
        return (
            <div className="modal-window">
                <Window title={this.props.title} />
            </div>
        ) 
    }
}

export default ModalWindow;
