import React from "react";

import "../../styles/search-bar.css"

interface IProps {
    changeHandle(): void,
    value: string
}

const ModalWindow: React.FunctionComponent<IProps> = (props) => {
    let {changeHandle, value} = props;

    return <section className="search-bar">
        <input
            maxLength={256}
            autoFocus={true}
            className="search-bar__input"
            onChange={changeHandle}
            value={value}
            placeholder="Введите название или тег" />
        <img className="search-bar__img" src="public/images/search.svg" alt="поиск"></img>
    </section>
}

export default ModalWindow;
