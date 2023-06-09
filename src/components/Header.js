import { useEffect } from 'react';
import styles from '../style.module.css';

const Header = (props) => {

    useEffect( 
        () => {
            if (JSON.parse(localStorage.getItem("todoList")) !== null) {
                // lo   calStorage.setItem("todoList",JSON.stringify([]));
                let todoLocal = JSON.parse(localStorage.getItem("todoList"));
                props.setTodoList(todoLocal);
                console.log(todoLocal);
                
            }else{
            }   
        },[]

      )
    

    return(
        <>
        
        <div className={styles.header}>ToDo App</div>
        </>
    )
}

export default Header;