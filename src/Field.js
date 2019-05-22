import React, { Component } from 'react';

class Field extends Component {
    render() {
        let icon = null;
        if(this.props.player === 'x')
            icon = <i className="fas fa-times fa-4x"></i>;
        else if(this.props.player === 'o')
            icon = <i className="far fa-circle fa-4x"></i>;

        return <td onClick={this.props.click}>{icon}</td>;
    }
}

export default Field;