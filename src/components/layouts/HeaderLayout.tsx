import React from 'react';

import AddButtonContainer from "../containers/AddButtonContainer";
import Logo from "../views/Logo";

import '../../styles/header-layout.css'

const HeaderLayout: React.StatelessComponent<any> = function (props) {
    return (
        <header className="header-layout">
            <Logo />
            <AddButtonContainer/>
        </header>
    )
}

export default HeaderLayout;