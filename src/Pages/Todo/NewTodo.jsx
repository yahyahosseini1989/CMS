import React, { useState } from 'react';
import { Input, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    demo: {
        padding: ' 0 15px',
    },
}));

const NewTodo = (props) => {
    const classes = useStyles();
    const [newTodo, setNewTodo] = useState({
        todos:
            [
                {
                    title: '',
                    done: false
                }
            ]
    })
    const handleChange = (e) => {
        setNewTodo({
            todos:
                [
                    {
                        title: e.target.value,
                        done: false
                    },
                ]
        });
    }
    const handleClick = () => {
        props.newTodo(newTodo);
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
                placeholder='type something to do'
                style={{
                    width: "70%",
                    margin: '15px '
                }}
                
            />
            <Button
                onClick={() => { handleClick() }}
                variant="outlined"
                color="secondary"
                style={{
                    width: "25%",
                    margin: '15px auto'
                }}
            >
                Add
            </Button>
        </div>
    );
}

export default NewTodo;