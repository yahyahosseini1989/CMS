import React, { useState } from 'react'
import Layout from './../Layout/Layout'
import TodoAppBar from './../Todo/TodoAppBar'
import NewTodo from './../Todo/NewTodo'
import TodoList from './../Todo/TodoList'
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Snackbars from '../../Components/Snackbar/Snackbar'

const useStyles = makeStyles({
    TodoWrap: {
        background: '#fff',
        border: '1px solid #3F51B5',
    },
});

const Todo = () => {
    const classes = useStyles();
    const [openSnakbar, setOpenSnakbar] = useState(false)
    const [todoLenght, setTodoLenght] = useState("0")
    const [todoDone, setTodoDone] = useState("0")
    const [todoUndone, setTodoUndone] = useState("0")
    const [lastTodo, setLastTodo] = useState({ todos: [] })
    const [SnackbarsDetail, setSnackbarsDetail] = useState({ message: '', alert: '' })
    const closeSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnakbar(false)
    }
    const getTodo = (newTodo) => {
        setLastTodo(prevState => {
            return {
                todos: [
                    ...prevState.todos,
                    newTodo,
                ]
            }
        })
        setTodoLenght(lastTodo.todos.length + 1);
        setTodoUndone(lastTodo.todos.length + 1);
    }
    const deleteItem = (itemId) => {
        setLastTodo(prevState => {
            return { todos: prevState.todos.filter(item => item.id !== itemId) }
        })
        setTodoLenght(lastTodo.todos.length - 1);
        setTodoUndone(lastTodo.todos.length - 1);
        setSnackbarsDetail({ message: 'The todo was successfully deleted', alert: 'success', })
        setOpenSnakbar(true)
    }
    const doneHandler = (item) => {
        let myTodo = lastTodo.todos
        let newArray = [...myTodo];
        for (let i = 0; i < newArray.length; i++) {
            if (newArray[i].id === item.id) {
                newArray[i].done = !newArray[i].done
            }
        }
        setLastTodo({ todos: newArray })
    }
    const filterDone = () => {
        // setTodoDone(parseInt(todoDone + 1))
    }
    const filterUndone = () => {
        // setTodoUndone(parseInt(todoUndone + 1))
    }
    return (
        <Layout>
            <Container maxWidth="sm">
                <div className={classes.TodoWrap}>
                    <TodoAppBar
                        todoLenght={todoLenght}
                        todoDone={todoDone}
                        todoUndone={todoUndone}
                        filterDone={() => { filterDone(todoDone) }}
                        filterUndone={() => { filterUndone() }}
                    />
                    <NewTodo newTodo={(newTodo) => { getTodo(newTodo) }} />
                    <TodoList
                        lastTodo={lastTodo}
                        deleteItem={(itemId) => { deleteItem(itemId) }}
                        done={(item) => { doneHandler(item) }}
                    />
                </div>
            </Container>
            <Snackbars
                open={openSnakbar}
                close={(close) => { closeSnackbar(close) }}
                typeAlert={SnackbarsDetail.alert}
                message={SnackbarsDetail.message}
            />
        </Layout>
    );
}
export default Todo;