import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Avatar, IconButton, Grid } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';

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
    const classes = useStyles();
    const todos = props.lastTodo.todos;

    return (
        <>
            <Grid item xs={12} >
                <div className={classes.demo}>
                    <List>
                        {todos.map((item, index) => (
                            <ListItem key={index}>
                                <ListItemAvatar>
                                    <Avatar>
                                        <FolderIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={item.title}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="delete" color="secondary">
                                        <DeleteIcon />
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
