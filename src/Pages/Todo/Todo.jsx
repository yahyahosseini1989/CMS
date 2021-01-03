import React, { useState } from 'react'
import Layout from './../Layout/Layout'
import TodoAppBar from './../Todo/TodoAppBar'
import NewTodo from './../Todo/NewTodo'
import TodoList from './../Todo/TodoList'

import { Container } from '@material-ui/core';

const Todo = () => {
    const [lastTodo, setLastTodo] = useState({
        todos: 
        [
            {
              title: '',
              done: false
            },
        ]
      })
    const getTodo = (newTodo) => {
        // setLastTodo(newTodo)
        setLastTodo(newTodo)
        console.log(lastTodo, "lasttodo")
    }
    return (
        <Layout>
            <Container maxWidth="md">
                <TodoAppBar />
                <NewTodo newTodo={(newTodo)=>{getTodo(newTodo)}} />
                <TodoList lastTodo={lastTodo}/>
            </Container>
        </Layout>
    );
}

export default Todo;