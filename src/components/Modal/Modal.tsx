import { useQuery } from "@apollo/client";
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

const Modal = ({ list }: { list: any }) => {
  console.log("list", list);

  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [video, setVideo] = useState("");

  const handleOpen = (videoUrl: any) => {
    setOpen(true);
    setVideo(videoUrl);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      {list.length > 0
        ? list.map((item: any, index: any) => (
            <div key={index}>
              <div
                onClick={() => handleOpen(item.video)}
                className={classes.lecture}
              >
                {item.name}
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
                    url={video}
                  />
                </Fade>
              </CusTomModal>
            </div>
          ))
        : null}
    </div>
  );
};

export default Modal;
