import React from 'react';
import Window from './Window';

interface IProps {
    isModalWindowShow: boolean,
    title: string
}

class ModalWindow extends React.PureComponent<IProps> {
    render() {
        return (
            <div>
                { this.props.isModalWindowShow && <Window title={this.props.title} />}
            </div>
        )
    }
}

export default ModalWindow;
