import React, {Component} from 'react';
import Label from '../libs/Label';
import Form from '../libs/Form';
import './AddTodo.css';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            todo: '',
            time: '',
            description: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() { 
        const { todo, time, description } = this.state; 

        return (
            
                <Form>
                    <Label>Todo</Label>
                    <input
                        placeholder="Start adding Todo items!!"
                        type="text" 
                        name="todo" 
                        value={todo} 
                        onChange={this.handleChange} />
                    <Label>Time</Label>
                    <input
                        type="text" 
                        name="time" 
                        value={time} 
                        onChange={this.handleChange}/>
                    <Label>Description</Label>
                    <input 
                        type="text" 
                        name="description" 
                        value={description} 
                        onChange={this.handleChange}/>
                    <input 
                        type="button" 
                        value="Add" 
                        onClick={this.submitForm} />
                </Form>

        );
    }
}

export default AddTodo;