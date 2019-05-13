import React from 'react';

const FieldGroupLayout: React.FunctionComponent<any> = function (props) {
    return (
      <section className="window__fields">
        {props.children}
      </section>
    )
}

export default FieldGroupLayout;