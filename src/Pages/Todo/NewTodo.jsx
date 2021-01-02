import React, { useState } from 'react';
import { Input, Button } from '@material-ui/core';

const NewTodo = (props) => {

    const [newTodo, setNewTodo] = useState([])
    const handleChange = (e) => {
        let Event = e.target.value;
        setNewTodo(Event);
    }
    const handleClick = () => {
        props.newTodo(newTodo);
        setNewTodo([])
    }

    return (
        <>
            <Input
                type="text"
                name={"newTodo"}
                onChange={(e) => { handleChange(e) }}
                value={newTodo}
                aria-describedby="my-helper-text"
            />
            <Button
                onClick={() => { handleClick() }}
                variant="outlined"
                color="primary"
            >
                Add
            </Button>
        </>
    );
}

export default NewTodo;