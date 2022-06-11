import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { PencilAltIcon } from '@heroicons/react/outline';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalDialog({open, setOpen, Button:ModalButton, children, Title:ModalTitle, handleSubmit}) {
//   const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button> */}
      {/* {Button} */}
      <ModalButton />
      <Dialog
      className="p-8"
      fullWidth
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
            <div className="w-full">
                <div className="w-11/12">
            {ModalTitle}
                </div>
            </div>
            </DialogTitle>
        <DialogContent>
          {children}
          {/* <ModalBody/> */}
        </DialogContent>
        <DialogActions>
            <div className="flex w-full justify-end">
            <button className="border-2 border-green-600  bg-green-50 text-green-600 transform transition-all flex rounded-lg px-6 py-2 hover:scale-105 hover:text-green-50 hover:bg-green-600 mr-2" onClick={handleSubmit}>
                    Submit
                </button>
                <button className="border-2 border-green-600  bg-green-600 text-white transform transition-all flex rounded-lg px-6 py-2 hover:scale-105 hover:text-green-600 hover:bg-white" onClick={()=>setOpen(false)}>
                    close
                </button>
            </div>
          {/* <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
