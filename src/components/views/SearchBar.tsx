import React from 'react';

import '../../styles/search-bar.css'

interface IProps {
    changeHandle(): void,
    value: string
}

class ModalWindow extends React.PureComponent<IProps> {
    render() {
        return (
            <section className="search-bar">
                <input 
                    maxLength={256}
                    autoFocus={true}
                    className="search-bar__input"
                    onChange={this.props.changeHandle} 
                    value={this.props.value} 
                    placeholder="Введите название или тег"/>
                <img className="search-bar__img" src="public/images/search.svg" alt="поиск"></img>
            </section>
        )
    }
}

export default ModalWindow;
