import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import { useState,useEffect } from 'react';
import TodoList from './components/TodoList';
function App() {
  const [todo, setTodo] = useState("");
  // writing logic to check already present data in localstorage. if present adding it todolist
  const [todoList , setTodoList] = useState([]);
  
  // setTodoList([]);
//  var tempList = todoList;


  return (
    <div className="App">
      <Header
       todo = {todo} 
       todoList = {todoList} 
       setTodo = {setTodo} 
       setTodoList ={setTodoList}
      ></Header>


      <Form 
      todo = {todo} 
      todoList = {todoList} 
      setTodo = {setTodo} 
      setTodoList ={setTodoList} >  
      </Form>

      <TodoList setTodoList = {setTodoList} todoList = {todoList} ></TodoList>
    </div>
  );
}

export default App;
