import shortid from "shortid";
import styles from "../style.module.css";
import { useEffect, useState } from "react";

// import shortid from "shortid";
const Form = ({todo,todoList,setTodo,setTodoList}) => {
    
    var tempList
    const handlechange = (e) => {
        setTodo(e.target.value);
    }
    const handlesubmit = (e) => { 

        if (todo.trim() === "") {
            alert("Please enter a todo item");
            return;
        }

        e.preventDefault();
        setTodo("")

        // check if data is already present in localstorage if yes then add it to todolist
       
        tempList = todoList;
        tempList.push({id:shortid.generate(),name:todo , chkstatus:false});
        setTodoList(tempList);
        localStorage.setItem("todoList",JSON.stringify(tempList));
        // setTodoList([...todoList,{id:shortid.generate(),name:todo}]);
        

    }

    return(
        <div className={styles.todoform}>

            <form>
                <input onChange={handlechange} value={todo} className={styles.todoinput} type="text" placeholder="Add Todo Item" ></input>
                <button type = "submit" onClick={handlesubmit} className={styles.todobutton} >Add</button> 
            </form>

            

        </div>
    )
}

export default Form;