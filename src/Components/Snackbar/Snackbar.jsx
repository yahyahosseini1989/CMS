import React from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import useStyles from './../UseStyle/UseStyle';
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
export default function Snackbars(props) {
  const classes = useStyles();
  return (
    <div className={classes.snackBar}>
      <Snackbar
        open={props.open}
        autoHideDuration={3000}
        onClose={props.close}
      >
        <Alert
          onClose={props.close}
          severity={props.typeAlert}
        >
          {props.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
