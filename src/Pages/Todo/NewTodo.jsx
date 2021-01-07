import React, { useState } from 'react';
import { Input, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    demo: {
        padding: ' 0 15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'end',
        margin: '15px auto',
    },
}));

const NewTodo = (props) => {
    const classes = useStyles();
    const [newTodo, setNewTodo] = useState({
        id: Date.now(),
        title: '',
        done: false
    })
    const handleChange = (e) => {
        setNewTodo(
            {
                ...newTodo,
                title: e.target.value,
            },
        );
    }
    const handleClick = () => {
        props.newTodo(newTodo);
        setNewTodo({
            ...newTodo,
            id: Date.now(),
            title: '',
        })
    }
    return (
        <div className={classes.demo}>
            <Input
                type="text"
                name={"newTodo"}
                onChange={(e) => { handleChange(e) }}
                value={newTodo.title}
                aria-describedby="my-helper-text"
                className={'w-100'}
                placeholder='Type something to do'
                style={{ width: "100%" }}
            />
            <Button
                onClick={() => { handleClick() }}
                variant="outlined"
                color="secondary"
                style={{ width: "150px" }}
            >
                Add Todo
            </Button>
        </div>
    );
}
export default NewTodo;