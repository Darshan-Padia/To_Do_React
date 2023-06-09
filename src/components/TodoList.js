import ToDo from "./ToDo";

const todoList = ({setTodoList, todoList}) =>{
    // console.log('jj');
    console.log(todoList);
    return(
        <div>
          {
            todoList.map( 
                (todoItem,index) => {
                    return(
                        <ToDo setTodoList = {setTodoList} todoList = {todoList} todoItem={todoItem} key={todoItem.id} ></ToDo>
                    )
                }
             )
          }
        </div>
    )
}
export default todoList;