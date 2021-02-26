import { Fade, Modal as CusTomModal } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import useStyles from "./styles";

const Modal = ({ list }: { list: any }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [video, setVideo] = useState("");

  const handleOpen = async (videoUrl: any) => {
    await setVideo(videoUrl);
    await setOpen(true);
    console.log(video);
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
                <PlayCircleFilledIcon className={classes.icon} />
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
