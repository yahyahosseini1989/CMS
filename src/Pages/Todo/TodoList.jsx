import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Avatar, IconButton, Grid } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));

export default function TodoList(props) {
    const Hours = new Date().getHours()
    const Minutes = new Date().getMinutes()
    const time = Hours + ':' + Minutes;
    const classes = useStyles();
    const todos = props.lastTodo.todos;
    const deleteHandler = (id) => {
        props.deleteItem(id)
    }
    const CheckBoxHandler = (item) => {
        props.done(item)
    }
    return (
        <>
            <Grid item xs={12} >
                <div className={classes.demo}>
                    <List>
                        {todos.map((item, index) => (
                            <ListItem key={index}>
                                <ListItemAvatar>
                                    <Avatar
                                        color={"primary"}
                                    >
                                        <FolderIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={item.title}
                                    secondary={time}//new Date().getTime()
                                />
                                <ListItemSecondaryAction>
                                    <IconButton
                                        edge="end"
                                        aria-label="delete"
                                        color="secondary"
                                        onClick={() => { deleteHandler(item.id) }}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                    <IconButton
                                        edge="end"
                                        aria-label="delete"
                                        color="primary"
                                        onClick={() => { CheckBoxHandler(item) }}
                                    >
                                        {(item.done === false) ? <CheckBoxOutlineBlankIcon /> : <CheckBoxIcon />}
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Grid>
        </>
    );
}
