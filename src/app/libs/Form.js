import React, {Component} from 'react';
import '../Application.css';
import Label from '../libs/Label';


class Form extends Component {
    render () {
        return (
            <form>
                <Label></Label>
                {this.props.children}
            </form>
        )
    }

} 

export default Form; 