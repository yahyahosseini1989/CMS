import React, { useState } from 'react'
import Layout from './../Layout/Layout'
import TodoAppBar from './../Todo/TodoAppBar'
import NewTodo from './../Todo/NewTodo'
import TodoList from './../Todo/TodoList'
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';



const useStyles = makeStyles({
    TodoWrap: {
        background: '#fff',
        border: '1px solid #3F51B5',
    },
});

const Todo = () => {
    const classes = useStyles();
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
        // setLastTodo(...lastTodo,newTodo)
        setLastTodo(prevState => {
            return {
                todos: [
                    ...prevState.todos,
                    newTodo,
                ]
            }
        })
    }
    console.log(lastTodo)

    return (
        <Layout>
            <Container maxWidth="md">
                <div className={classes.TodoWrap}>
                    <TodoAppBar />
                    <NewTodo newTodo={(newTodo) => { getTodo(newTodo) }} />
                    <TodoList lastTodo={lastTodo} />
                </div>
            </Container>
        </Layout>
    );
}

export default Todo;