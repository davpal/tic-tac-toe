import React from 'react';

const Field = (props) => {
    let icon = null;
    if(props.player === 'x')
        icon = <i className="fas fa-times fa-4x"></i>;
    else if(props.player === 'o')
        icon = <i className="far fa-circle fa-4x"></i>;

    return <td onClick={props.click}>{icon}</td>;
}

export default Field;