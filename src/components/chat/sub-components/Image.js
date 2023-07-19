import React from "react";
import { styled } from "@mui/system";

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
}));

function ResponseImage(props) {
  return (
    <React.Fragment>
      <Container>
        <img alt="response-img" src={props.src} />
      </Container>
    </React.Fragment>
  );
}

export default ResponseImage;
