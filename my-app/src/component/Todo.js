import React,{useState} from 'react';
import Todoform from './Todoform';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
// import './style.less';
import '../less-folder/styles.css'

function Todo({todos,completeTodo,removeTodo,updateTodo}){
    const [edit,setEdit]= useState({
        id:null,
        value:''
    })
    const supmitUpdate= value =>{
        updateTodo(edit.id,value) ;
        setEdit({
            id:null,
            value:''
        });
    };
    if (edit.id) {
        return <Todoform edit={edit} onSubmit={supmitUpdate} />;
      }
    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
        key={index}>
      <div className="data" key={todo.id} onClick={() => completeTodo(todo.id)}>
      <span>{todo.text}</span>  
      <span>{todo.age}</span>
      <span>{todo.gender}</span>

      </div>

      <div className='icons'>
      <RiCloseCircleLine
      onClick={()=>removeTodo(todo.id)}
      className="delete-item"
      />
      <TiEdit
      onClick={()=>setEdit({id:todo.id,value:todo.text,age:todo.age,gender:todo.gender})}
      className="update-item"
      />
      </div>
        </div>
    )

    )
}
export default Todo;