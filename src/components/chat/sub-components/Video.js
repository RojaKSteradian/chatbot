import React from "react";
import { styled } from "@mui/system";

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "100%"
}));

const Video = styled("video")(({ theme }) => ({
  width: "70%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%)",
  borderRadius: "1rem",
}));

function ResponseVideo(props) {
  return (
    <React.Fragment>
      <Container>
      <p>Video Result(s)</p>
        <Video
          src={props.src}
          controls
          controlsList="nodownload noplaybackrate"
          disablePictureInPicture
        />
      </Container>
    </React.Fragment>
  );
}

export default ResponseVideo;
