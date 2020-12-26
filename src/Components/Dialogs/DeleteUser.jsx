import React, { Fragment } from 'react';
import { Dialog, Button, DialogActions, DialogContent, DialogTitle, DialogContentText } from '@material-ui/core';
import CustomizedSnackbars from './../Snackbar/Snackbar';

export default function DeleteUser(props) {
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  const sendConfirm = (Id) => {
    props.applyRow(Id)
  }

  return (
    <Fragment>
      <Dialog
        open={props.Open}
        onClose={props.Close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Attention!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure to remove this user with this Email: "{props.Name}"  ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={props.Close} // وقتی پراپس را از کامپوننت دیگری پاس میدهیم ، باید اسم کی آن ار در اینجا فراخوانی کنیم نه محتوای جلوی مساوی آن را
            color="secondary"
          >
            Cancel
          </Button>
          <Button
            onClick={() => { sendConfirm(props.Id) }}
            color="primary"
            autoFocus
          >
            Apply
          </Button>
        </DialogActions>
      </Dialog>
      <CustomizedSnackbars />
    </Fragment>
  );
}
