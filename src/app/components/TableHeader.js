import React, {Component} from 'react';
import '../Application.css';


class TableHeader extends Component {
    render () {
        return (
            <thead>
                <tr>
                    <th>Todo</th>
                    <th>Time</th>
                    <th>Description</th>
                </tr>
            </thead>
        )
    }

} 

export default TableHeader;

