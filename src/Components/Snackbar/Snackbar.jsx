import React from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import useStyles from './../UseStyle/UseStyle';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Snackbars(props) {
  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  // const handleClose = (event, reason) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }
  //   setOpen(false);
  // };

  return (
    <div className={classes.snackBar}>
      <Snackbar
        // open={open}
        open={props.open}
        autoHideDuration={2000}
      // onClose={handleCloseSnakbar}
      // onClose={handleCloseSnakbar}
      >
        <Alert
          // onClose={handleCloseSnakbar}
          onClose={props.CloseSnackbar}
          severity="success"
        >
          This is a success message!
        </Alert>
      </Snackbar>
      {/* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
      <Alert severity="success">This is a success message!</Alert> */}
    </div>
  );
}
