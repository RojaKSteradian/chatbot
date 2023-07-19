import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import Navbar from "./layout-components/Navbar";
import Footer from "../components/layout-components/Footer";
import { NavLink } from "react-router-dom";

const PageContainer = styled("div")({
//   display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height : "100vh",
  minHeight: "100vh", // Center the content vertically
//   backgroundColor: "#f0f0f0", // Replace with your preferred background color
});

const ContactContainer = styled("div")(({theme}) => ({
  textAlign: "center",
//   margin: "50px 0",
  marginTop:"50px",
    padding : "20rem 30rem",
    [theme.breakpoints.down("sm")]: {
      padding :  "2rem",
    },
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.colors.heading,
  fontSize: "3.5rem",
  fontWeight: "bold",
  marginBottom: theme.spacing(3),
  textDecoration : "underline",
  [theme.breakpoints.down("sm")]: {
    fontSize :  "2.5rem",
    marginBottom : theme.spacing(1),
  },

}));

const Content = styled(Typography)(({ theme }) => ({
  color: theme.colors.text,
  fontSize: "1.2rem",
  lineHeight: "1.6",
  fontFamily: "'Roboto Slab', serif",
}));

const AboutUs = styled(Typography)(({ theme }) => ({
    textAlign : "justify",
    [theme.breakpoints.down("sm")]: {
      padding :  "2rem",
      marginBottom : "1rem",
    },
}));

const Address = styled(Typography)(({theme}) => ({
    fontSize : "1.2rem",
    fontWeight : "600",
    color : "darkgreen",
})) 

const Links = styled(Typography)(({theme}) => ({
  fontSize : "1.2rem",
  fontWeight : "600",
  color : "darkgreen",
})) 
const ContactUs = () => {
  return (
    <>
    <PageContainer>
      <Navbar />
      <ContactContainer>
        <Title variant="h1">Contact Us</Title>
        <Content variant="body1">
          <AboutUs style={{fontSize : "1.4rem"}}>At Innotrat Labs - we are building next generation conversational AI enabled Virtual Assistant for Embedded Product Developers : That's flagship platform from Innotrat Labs. At Innotrat Labs - we address an industrial problem statement like Scarcity of industry-ready experts in end-to-end Embedded Product Development : our platform uses a virtual metahuman enabled teaching assistant for upskilling users enabling them to be research, industry and job ready. We are transforming the way embedded engineers approach circuit design by leveraging the power of AI. With our innovative technology, we empower engineers to upskill and design circuits quickly and easily through simple conversations with our meta human bot.</AboutUs>
          <Address>Address- 2nd & 3rd Floor, CTEF: INNOVEX, CIPET: SARP-LARPM, Patia, Bhubaneswar, Odisha 751024 </Address>
          <Links>Contact - <span style={{color : "blue", textDecoration : "underline"}}>+91 9176190201</span>
          <br />
                 Email ID - 
                 <span style={{color : "blue", textDecoration : "underline"}}>
                  <NavLink to="mailto:satya@innotrat.com">satya@innotrat.com</NavLink>
                  </span>
                  </Links>
        </Content>

      </ContactContainer>
      {/* Add your content components below */}
        
      
    </PageContainer>
    <Footer/>
    </>
  );
};

export default ContactUs;