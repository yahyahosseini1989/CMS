import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography, Toolbar, IconButton, Badge } from '@material-ui/core';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import NotificationsIcon from '@material-ui/icons/Notifications';
import FormatListNumberedRtlIcon from '@material-ui/icons/FormatListNumberedRtl';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    bar: {
        backgroundColor: '#591ee9',
    }

}));

export default function TodoAppBar(props) {
    const classes = useStyles();
    const handleDoneFilter = () => {
        props.filterDone()
    }
    const handleUndoneFilter = () => {
        props.filterUndone()
    }
    return (
        <div className={classes.grow}>
            <AppBar position="static" className={classes.bar}>
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        My Todo
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="Done" color="inherit" onClick={() => { handleDoneFilter() }}>
                            <Badge badgeContent={props.todoDone} color="secondary">
                                <AssignmentTurnedInIcon />
                            </Badge>
                        </IconButton>
                        <IconButton aria-label="Undone" color="inherit" onClick={() => { handleUndoneFilter() }}>
                            <Badge badgeContent={props.todoUndone} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton aria-label="All Todos" color="inherit">
                            <Badge badgeContent={props.todoLenght} color="secondary">
                                <FormatListNumberedRtlIcon />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
