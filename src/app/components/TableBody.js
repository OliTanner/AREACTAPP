/*import React, { Component } from 'react';
import Button from '../libs/Button';



class TableBody extends Component {
    const tableBody = this.props => { 
         const rows = this.props.todoList.map((row, index) => {
            return (
                <tr key={index}>
                    <td>{row.todo}</td>
                    <td>{row.time}</td>
                    <td>{row.description}</td>
                    <td><Button onClick={() => this.props.removeItem(index)}>Delete</Button></td>
                </tr>
            );
        });
    }

    render () {
        return (
            <tbody>{rows}</tbody>
        );
    }
}

export default TableBody; */