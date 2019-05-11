import React from 'react';

interface IProps {
    changeHandle(): void,
    value: string
}

class ModalWindow extends React.PureComponent<IProps> {
    render() {
        return (
            <section>
                <input 
                    onChange={this.props.changeHandle} 
                    value={this.props.value} 
                    placeholder="Введите название или тег"/>
                <img alt="поиск"></img>
            </section>
        )
    }
}

export default ModalWindow;
