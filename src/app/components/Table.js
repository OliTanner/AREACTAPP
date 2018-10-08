import React, { Component } from 'react';
import Button from '../libs/Button';
import TableHeader from './TableHeader';
import './Table.css';
//import Tr from '../libs/TableRow';


const TableBody = props => { 
    const rows = props.todoList.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.todo}</td>
                <td>{row.time}</td>
                <td>{row.description}</td>
                <td><Button onClick={() => props.removeItem(index)}>Delete</Button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

class Table extends Component {
    render() {
        const { todoList, removeItem } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody todoList={todoList} removeItem={removeItem} />
            </table>
        );
    }
}

export default Table;