
import {v4 as uuidv4} from 'uuid';
import React, { useContext, useEffect, useState } from "react";
import { Todo } from "./todo.types";

interface TodoContextInterface {
    todos: Todo[] | [] ,
    addTodo: (name: string) => void,
    deleteTodo: (id: string) => void
}

const TodoContext = React.createContext<TodoContextInterface | undefined>(undefined);

export const TodoProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    
    const value = useProvideTodos();
    
    return(
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    )
}


export const useTodos = () => {
    const context  = useContext(TodoContext);
    if( context === undefined){
        throw new Error("useTodoContext must be within TodoProvider")
    } else {
        return context
    }

}

const useProvideTodos = () => {

    const [todos, setTodos] = useState<Todo[] | []>([]);

    const intializeLocalStorageDb = () => {
        localStorage.setItem("todosDB", "[]")
    }

    const clearLocalStorageDb = () => {
        localStorage.setItem("todosDB", "[]")

    }

    const updateLocalStorageDb = () => {
        localStorage.setItem("todosDB", JSON.stringify(todos))

    }

    const addTodo = (name: string) => {
        const newTodo: Todo = {
            name: name,
            completed: false,
            id: uuidv4()
        }
        setTodos([...todos, newTodo])
 
    }

    const deleteTodo = (id: string) => {
        setTodos(todos.filter(e => e.id != id))
    }


    useEffect(() => {

        // create localstorage item for handling todos if there isnt one already
        if(!localStorage.getItem("todosDB")){
            intializeLocalStorageDb();
        } else {
            setTodos(JSON.parse(localStorage.getItem("todosDB") || '[]'))

        }


    },[])

    useEffect(() => {
        updateLocalStorageDb();

    },[todos]);

    return {
        todos,
        addTodo,
        deleteTodo
    }

}


