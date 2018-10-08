import React, { Component } from 'react';
import './Application.css';
import Title from './libs/Title'
import Header from './libs/Header'
import Container from './libs/Container';
import Logo from './libs/Logo';
import Body from './libs/Body';
import Table from './components/Table';
import AddTodo from './components/AddTodo';



class Application extends Component {

  state = {
    todoItems: []
  };

  removeItem = index => {
    const { todoItems } = this.state;
  
    this.setState({
        todoItems: todoItems.filter((todoItem, i) => { 
            return i !== index;
        })
    });
  }

  handleSubmit = todoItem => {
    this.setState({todoItems: [...this.state.todoItems, todoItem]});
  }

  render() {

    const { todoItems } = this.state;
    
   
    return (
      <Container>
        <Header>
          <Logo />
          <Title name="React Todo App"/>
        </Header >
        <Body>
          <Table
              todoList={todoItems}
              removeItem={this.removeItem}
          />
          <AddTodo handleSubmit={this.handleSubmit} />
  
          <br></br>
          <br></br>
          
        </Body>
        
        
      </Container>
      
    );
  }
}

export default Application;



  
  
  