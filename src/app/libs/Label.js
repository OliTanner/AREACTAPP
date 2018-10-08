import React, {Component} from 'react';
import '../Application.css';

class Label extends Component {
    
    render () {
        return (
            <label>{this.props.children}</label>

        )
    }

} 

export default Label;