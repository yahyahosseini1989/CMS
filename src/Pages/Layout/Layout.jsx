import React from 'react';
import HeaderMenu from '../../Components/Navigation/HeaderMenu'
import useStyles from '../../Components/UseStyle/UseStyle';



export default function Layout(props) {
  const classes = useStyles();
  return (
    <>
      <HeaderMenu />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </>
  );
}