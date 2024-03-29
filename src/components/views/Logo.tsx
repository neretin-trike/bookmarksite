import React from "react";

import "../../styles/logo.css"

const Logo: React.FunctionComponent<any> = (props) => {
    return (
        <div className="logo">
            <h1 className="logo__title">Сайт <span className="logo__subtitle">закладок</span></h1>
            <img className="logo__img" src="public/images/logo.png" alt="логотип"></img>
        </div>
    )
}

export default Logo;
