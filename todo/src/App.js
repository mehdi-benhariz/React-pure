import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/header';
import AddTodo from './components/layout/AddTodo'; 
import uuid from ' uuid ';
class App extends Component {
  state={
    todos:[
      {
        id:uuid.v4(),
      title:'homework',
      completed:false
      },
      {
        id:uuid.v4(),
      title:'make the project ',
      completed:true
      },
      {
        id:uuid.v4(),
      title:'meeting with microsoft',
      completed:false 
      } 
         ]
}

markComplet = (id) =>{
this.setState({ todos : this.state.todos.map( todo => {
  if (todo.id === id ){
    todo.completed=!todo.completed
  }
  return todo ;
}) });
    }

 delTodo=(id)=>{
   this.setState({ todos: [...this.state.todos.filter(todo => todo.id!==id)]})
 }

 AddTodo=(title)=>{
   const NexTodo={
     title,
     id:uuid.v4() ,
     completed:false
   }
   this.setState({todos:[ ...this.state.todos,NexTodo ]})
 }
 
render(){
  return (
    <React.Fragment>
 
      <div className='container'>
  <div className="App">
  <Header/>
  <AddTodo/>
<Todos todos={ this.state.todos} markComplet={this.markComplet} delTodo ={ this.delTodo}/>
    </div>
      </div>
  
    </React.Fragment>
 
  );
}
}
export default App;
