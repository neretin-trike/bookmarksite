import React from 'react';

const InteractLayout: React.FunctionComponent<any> = function (props) {
    return (
      <section>
        {props.children}
      </section>
    )
}

export default InteractLayout;