import React from "react";
import styled, { keyframes } from "styled-components";
import { styled as muiStyled } from "@mui/system";
import { Typography } from "@mui/material";

const gradient = keyframes`
{
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}`;

const TextContainer = muiStyled("div")(({ theme }) => ({
  margin: "2rem 0rem 0rem 0rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "0rem",
    margin: "2rem 0rem 2rem 0rem",
  },
  gap: "0.5rem",
  userSelect: "none",
}));

const HeadingText = muiStyled("h1")(({ theme }) => ({
  fontSize: "5rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "3rem",
  },
  top: 0,
  bottom: 0,
  margin: 0,
}));

const GradientTextOne = styled(HeadingText)`
  background: linear-gradient(90deg, #007cf0, #00dfd8);
  background-size: 200% auto;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradient} 3s ease-in-out infinite;
`;

const GradientTextTwo = styled(HeadingText)`
  background: linear-gradient(90deg, #007cf0, #ff0080);
  background-size: 200% auto;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradient} 3s ease-in-out infinite;
`;
const GradientTextThree = styled(HeadingText)`
  background: linear-gradient(90deg, #ff4d4d, #f9cb28);
  background-size: 200% auto;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradient} 3s ease-in-out infinite;
`;

const DescriptionContainer = muiStyled("div")(({ theme }) => ({
  margin: "0rem 10rem 4rem 10rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  [theme.breakpoints.down("sm")]: {
    margin: "0rem 0rem 2rem 0rem",
  },
}));

function BannerText() {
  const [currentTextIndex, setCurrentTextIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((currentIndex) =>
        currentIndex === 2 ? 0 : currentIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <React.Fragment>
      <TextContainer>
        {currentTextIndex === 0 ? (
          <GradientTextOne>Learn.</GradientTextOne>
        ) : (
          <HeadingText>Learn.</HeadingText>
        )}

        {currentTextIndex === 1 ? (
          <GradientTextTwo>Grow.</GradientTextTwo>
        ) : (
          <HeadingText>Grow.</HeadingText>
        )}

        {currentTextIndex === 2 ? (
          <GradientTextThree>Evolve.</GradientTextThree>
        ) : (
          <HeadingText>Evolve.</HeadingText>
        )}
      </TextContainer>
      <DescriptionContainer>
        <Typography
          component="span"
          variant="body1"
          align="center"
          sx={{
            color: "#888",
          }}
          style={{fontSize:"1.3rem"}}
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters
        </Typography>
      </DescriptionContainer>
    </React.Fragment>
  );
}

export default BannerText;
