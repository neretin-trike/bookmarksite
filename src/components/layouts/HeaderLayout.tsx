import React from 'react';

import AddButtonContainer from "../containers/AddButtonContainer";
import Logo from "../views/Logo";

const HeaderLayout: React.StatelessComponent<any> = function (props) {
    return (
        <header>
            <Logo />
            <AddButtonContainer />
        </header>
    )
}

export default HeaderLayout;