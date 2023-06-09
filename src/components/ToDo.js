import { useEffect } from 'react';
import styles from '../style.module.css';
const ToDo = ({setTodoList,todoList, todoItem}) => {


    

    function check(id_) {
        document.getElementById(id_).checked = true;
    }
    function uncheck(id_) {
        document.getElementById(id_).checked = false;
    }

    // using use effect on first load to check the status of the task and check the chekbox if task is completed
    useEffect(
        () => {
            if (todoItem.chkstatus) {
                check(todoItem.id); 
            }else{
                uncheck(todoItem.id);
            }
        },[]
    )

    // delete todo item
    const deleteTodo = () => {
        const newTodoList = todoList.filter((item) => item.id !== todoItem.id);
        setTodoList(newTodoList);

        // storing the new todolist in localstorage
        localStorage.setItem("todoList",JSON.stringify(newTodoList));
    }

    // strikethrough logic when checkbox is checked
    const strikethrough = (e) => {
        var tpls = JSON.parse(localStorage.getItem("todoList"));
        tpls.map((item) => {
            if (item.id === todoItem.id) {
                item.chkstatus = !item.chkstatus;
                item.chkstatus?e.target.checked = true:e.target.checked = false;
                // console.log(e.target.checked);
            }
        })
        localStorage.setItem("todoList",JSON.stringify(tpls));
        if (e.target.checked) {
            var txt = e.target.parentNode.querySelector("h2");
            txt.style.textDecoration = "line-through";
            e.target.checked = true;
        }else{
            var txt = e.target.parentNode.querySelector("h2");
            txt.style.textDecoration = "none";
            e.target.checked = false;
        }

    }

   
     

    return(
        <div>
            <div  className={styles.todoitem}>
                <div className={styles.chkbox_and_task}>
                    <input id={todoItem.id} onClick={strikethrough} className={styles.chkbox} type="checkbox" />
                    <h2  className={`${styles.todoname}  ${todoItem.chkstatus?`${styles.strikethrough} `:""}  `} >
                        
                        {todoItem.name}
                    </h2>
                </div>
                <button onClick={deleteTodo} className={styles.dltbtn}>Delete</button>
            </div>
        </div>
        
    )
}

export default ToDo;