import React, { useState } from 'react';
import { Input, Button } from '@material-ui/core';

const NewTodo = (props) => {

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
        // setNewTodo({
        //     todos: 
        //     [
        //         {
        //           title: '',
        //           done: false
        //         },
        //     ]
        //   })
    }

    return (
        <>
            <Input
                type="text"
                name={"newTodo"}
                onChange={(e) => { handleChange(e) }}
                value={newTodo.title}
                aria-describedby="my-helper-text"
                className={'w-100'}
                style={{
                    width: "75%",
                    margin: '15px auto'
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
        </>
    );
}

export default NewTodo;