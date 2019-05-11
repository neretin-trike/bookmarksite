import React from 'react';
import Window from './Window';

interface IProps {
    isModalWindowShow: boolean
}

class ModalWindow extends React.PureComponent<IProps> {
    render() {
        return (
            <div>
                { this.props.isModalWindowShow && <Window title="Добавление новой закладки" />}
            </div>
        )
    }
}

export default ModalWindow;
