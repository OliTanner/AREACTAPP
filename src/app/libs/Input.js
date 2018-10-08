import React, {Component} from 'react';
import '../Application.css';


class Input extends Component {
    render () {
        return (
                <input 
                    placeholder={this.props.placeholder}
                    type={this.props.text}
                    name={this.props.name} 
                    value={this.props.value} 
                    onChange={this.props.handleChange}
                />
            
        )
    }

} 

export default Input; 