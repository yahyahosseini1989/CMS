import React, { Fragment } from 'react';
import { Dialog, Button, DialogActions, DialogContent, DialogTitle, DialogContentText } from '@material-ui/core';

export default function DeleteUser(props) {
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };


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
            Are you sure to remove USER ( بعدا اسم کاربر رو به اینجا پاس بدم ) ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={props.Close} // وقتی پراپس را از کامپوننت دیگری پاس میدهیم ، باسید اسم کی آن ار در اینجا فراخوانی کنیم نه محتوای جلوی مساوی آن را
            color="primary"
          >
            Cancel
          </Button>
          <Button
            onClick={()=>{alert()}}
            color="primary"
            autoFocus
          >
            Apply
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
