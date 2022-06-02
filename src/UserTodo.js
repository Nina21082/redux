import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTodos, deletTodo,complateTodo, addTodo} from "./store/action/todoAction"
import { useParams } from "react-router-dom"





export const  UserTodo = () => {

    const [todoTitle, setTodoTitle] = useState('')
    const {id} = useParams();
    const dispatch = useDispatch();
    const todoList =  useSelector(state => state.todos);
    const {todos} = todoList

    useEffect(() => {
        dispatch(getTodos(id))
    }, [dispatch])
 
    const onDelate = (todoId) =>{
        dispatch(deletTodo({id: todoId}))

    }

    const onComplate = (complateId) => {
            dispatch(complateTodo({id: complateId}))
   
    }

    const postTodo = () => {
        const data = {
            title: todoTitle,
            completed: false,
        }
        dispatch(addTodo(id, data))
        console.log(data)
        setTodoTitle('')
    }

    return(       
       <>       
        <div className="col-6 input">
            <input type="text" className="form-control"aria-label="Recipient's username" value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} aria-describedby="button-addon2"/>
            <button type="button" className="btn btn-success" onClick={postTodo}>Add</button>
        </div>  
        <div className="container">
            <div className="row-10">
                    {todos.map((todo, index) => ( 
               <div className="col todos" key={index}>
                  <strong>{todo.id}</strong>
                  <li  className={todo.completed ? 'complated' : 'uncomplated'}>{todo.title}</li>
                  <button type="button" className="btn btn-danger m-2" onClick={() => onDelate(todo.id)}>Delate</button>
                  <button type="button" className="btn btn-success m-2"onClick={() => onComplate(todo.id)} >{!todo.completed ? 'complated' : "uncomplated"}</button>       
            </div> 
        ))}
           
        </div>   
            </div>
         </>       

       
    )
    
}