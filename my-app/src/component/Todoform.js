import React,{useState} from 'react';
import { Form} from 'antd';
import { Input} from 'antd';
import '../less-folder/styles.css'

// import Todogender from './Todogender'
function Todoname(props){
    const[name,setName]=useState("");
    const[age,setAge]=useState("");
    const[gender,setGender]=useState("");

    
    // const inputRef = useRef(null);

    // useEffect(() => {
    //   inputRef.current.focus();
    // });

    const handlename = e => {
        setName(e.target.value);
      };
      const handleage = e=> {
        setAge(e.target.value);
      };
      const handlegender = e => {
        setGender(e.target.value);
      };
    const handlesubmit=e=>{
        e.preventDefault();
        props.onSubmit({
            id:Math.floor(Math.random()*10000),
            text:name,
            age:age,
            gender:gender
        });
       
        setName("");
        setAge("");
        setGender("");
    }
  
return(
    <div>
<Form className="Todo-form" onSubmit={handlesubmit}>
    
    <Input placeholder="Add patient name" type="text" value={name} name="Name" className="todo-input" onChange={handlename}></Input>
    <Input placeholder="Add patient age" type="number" value={age} name="Gender" className="todo-input" onChange={handleage}></Input>
    <Input placeholder="Add patient gender" type="text" value={gender} name="Age" className="todo-input" onChange={handlegender}></Input>
<button className="todo-button" onClick={handlesubmit}>Add patient</button>
</Form>
    </div>
)
}
export default Todoname;