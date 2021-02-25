import {
  createStyles,
  Fade,
  makeStyles,
  Modal as CusTomModal,
  Theme,
} from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import React, { useState } from "react";
import ReactPlayer from "react-player";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    lecture: {
      margin: "1rem",
      cursor: "pointer",
      "&:hover": {
        color: "red",
      },
    },
  })
);

const Modal = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const url = "https:www.youtube.com/watch?v=ysz5S6PUM-U";
  const text = "Responsive là gì?";

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div onClick={handleOpen} className={classes.lecture}>
        {text}
      </div>

      <CusTomModal
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
          <ReactPlayer
            width="90%"
            height="80%"
            controls={true}
            muted={true}
            url={url}
          />
        </Fade>
      </CusTomModal>
    </div>
  );
};

export default Modal;
