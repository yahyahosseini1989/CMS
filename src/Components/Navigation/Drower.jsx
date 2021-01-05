import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { SwipeableDrawer, Button, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import AccountIcon from '@material-ui/icons/AccountBox';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

import { Link } from "react-router-dom";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    link: {
        textDecoration: 'none',
    },
});

export default function SwipeableTemporaryDrawer(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: props.openDrawer, //false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list)}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <Link to="/" className={classes.link}>
                    <ListItem button >
                        <ListItemIcon><HomeIcon color="primary" /></ListItemIcon>
                        <ListItemText primary={"Home"} />
                    </ListItem>
                </Link>
                <Link to="/Users" className={classes.link}>
                    <ListItem button>
                        <ListItemIcon><AccountIcon color="primary" /></ListItemIcon>
                        <ListItemText primary={"Users"} />
                    </ListItem>
                </Link>
                <Link to="/Todo" className={classes.link}>
                    <ListItem button>
                        <ListItemIcon><EventAvailableIcon color="primary" /></ListItemIcon>
                        <ListItemText primary={"Todo"} />
                    </ListItem>
                </Link>
                <Divider />
                <Link to="/Contact" className={classes.link}>
                    <ListItem button>
                        <ListItemIcon><HeadsetMicIcon color="primary" /></ListItemIcon>
                        <ListItemText primary={"Contact Us"} />
                    </ListItem>
                </Link>
                <Link to="/About" className={classes.link}>
                    <ListItem button>
                        <ListItemIcon><HelpOutlineIcon color="primary" /></ListItemIcon>
                        <ListItemText primary={"About Us"} />
                    </ListItem>
                </Link>
            </List>
        </div>
    );

    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}
