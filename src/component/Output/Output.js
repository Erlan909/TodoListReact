import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { Fade, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import Snackbar from '@material-ui/core/Snackbar';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
export default function Output({ data, del, status }) {
  // console.log(data)
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [elAbout, setElAbout] = React.useState()
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      {data ? data.slice(0).reverse().map((el, index) => {
        return (
          <div key={index} style={el.status == 'new' ? { backgroundColor: 'red' } : el.status == 'process' ? { backgroundColor: 'yellow' } : { backgroundColor: 'green' }}>
            <h3>Task Name: {el.name}</h3>
            <button onClick={() => del(el.id)}><DeleteIcon color="primary" /></button>
            {
              el.status !== 'finish' && <button onClick={() => status(el.id, el.status)}>{el.status == 'new' ? 'in process' : el.status == 'process' ? 'finish' : null}</button>
            }
            <button type="button" onClick={() => {
              setElAbout(el)
              handleOpen()
            }}>
              About the Task
      </button>
          </div>
        )
      })
        : null
      }
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2>{elAbout?.about}</h2>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}