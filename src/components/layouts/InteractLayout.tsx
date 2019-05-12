import React from 'react';

const InteractLayout: React.FunctionComponent<any> = function (props) {
    return (
      <section className={props.class}>
        {props.children}
      </section>
    )
}

export default InteractLayout;