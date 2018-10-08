import React, {Component} from 'react';
import './Table.css';



class Tr extends Component {
    render () {
        return (
            <th>
                {this.props.children}
            </th>
        )
    }

} 

export default Tr;