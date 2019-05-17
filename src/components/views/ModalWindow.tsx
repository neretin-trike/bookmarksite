import React from "react";

import Window from "./Window";
import { useAnimation } from "../../hooks/useAnimation";

import "../../styles/modal-window.css";

interface IProps {
    title: string
}

const ModalWindow: React.FunctionComponent<IProps> = (props) => {
    let theme = useAnimation("modal-window_state_show");

    return <div className={`modal-window ${theme}`}>
        <Window title={props.title} />
    </div>
}

export default ModalWindow;
