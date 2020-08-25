import React,{useState } from 'react';
import Todoform from './Todoform';
import Todo from './Todo';
// import './style.less';
import '../less-folder/styles.css'

function Todolist(){
    const [todos,setTodos] = useState([]);
    const addtodo = todo =>{
      if (!todo.text || /^\s*$/.test(todo.text)) {
        return;
      }
    
    
    const newTods=[todo,...todos]
    setTodos(newTods);
    console.log(...todos);
}
const updateTodo =(todoId,newValue)=>{
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
        return;
      }
      setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
}
const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };
const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

    return(
        <div>
<h1>data about patient</h1>
 <Todoform onSubmit={addtodo}/>
 <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
        </div>
    )
}
export default Todolist;