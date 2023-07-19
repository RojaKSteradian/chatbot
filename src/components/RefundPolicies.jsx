import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import Navbar from "./layout-components/Navbar";
import Footer from "../components/layout-components/Footer";

const PageContainer = styled("div")({
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
});

const PageSection = styled("div")({
  textAlign: "center",
  marginTop: "50px",
});

const Title = styled(Typography)(({ theme }) => ({
  color: theme.colors.heading,
  fontSize: "4rem",
  fontWeight: "bold",
  marginBottom: theme.spacing(3),
  marginLeft : "4rem",
  [theme.breakpoints.down("sm")]: {
    marginLeft : "0rem",
    fontSize : "3.2rem",
    marginBottom : theme.spacing(1),
  },
}));

const Content = styled(Typography)(({ theme }) => ({
  color: theme.colors.text,
  fontSize: "1.2rem",
  lineHeight: "1.6",
}));

const Paragraph = styled(Typography)(({ theme }) => ({
  fontSize: "1.4rem",
  lineHeight: "1.6",
  marginBottom: theme.spacing(2),
  textAlign: "justify", // Align paragraphs to the left
  padding : "0rem 25rem",
  fontFamily: "'Roboto Slab', serif",
  fontWeight : "400",
  letterSpacing : "0.07rem",
  color : theme.colors.text,
  [theme.breakpoints.down("sm")]: {
    padding :  "2rem",
  },
}));

const RefundPolicy = () => {
  return (
    <>
    <PageContainer>
      <Navbar />
      <PageSection>
        <Title variant="h1">Refund Policy</Title>
        <Content variant="body1">
          <Paragraph>
          <strong>1.</strong>	For return of product(s) damaged at the time of delivery, the shipping charges shall be borne by the Company. However, for return any of the product(s) for any other reasons, it shall be the responsibility of the User to arrange for the return of such cancelled product(s) and the shipping charges shall be borne by such User.
          <br /><br />
          <strong>2.</strong>	We request You not to accept any product package that seems to be tampered with, opened or damaged at the time of delivery. The products must be returned in the same condition as delivered by the Company. Any products returned showing signs of any use or damage in any manner shall not be accepted for return. 
          <br /><br />
          <strong>3.</strong>	All requests for return of products must be placed within 7(Seven) days from the date of delivery. Please note that no refunds shall be claimed or will be entertained post 7 (Seven)days from the date of delivery.
          <br /><br />
          <strong >DISCLAIMER:</strong> <span style={{color : "#001e61"}}>THIS WEBSITE, THE SERVICES ARE PROVIDED ON AN "AS IS" BASIS WITH ALL FAULTS AND WITHOUT ANY WARRANTY OF ANY KIND. THE COMPANY HEREBY DISCLAIMS ALL WARRANTIES AND CONDITIONS WITH REGARD TO THE WEBSITE, PRODUCTS AND THE SERVICES, INCLUDING WITHOUT LIMITATION, ALL IMPLIED WARRANTIES AND CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, ACCURACY, TIMELINESS. PERFORMANCE, COMPLETENESS, SUITABILITY AND NON-INFRINGEMENT. ADDITIONALLY, THE COMPANY SHALL NOT BE LIABLE FOR ANY DAMAGES ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SITE, OR THE SERVICES. YOUR USE OF ANY INFORMATION OR MATERIALS ON THIS WEBSITE/APPLICATION/SERVICES/PRODUCTS IS ENTIRELY AT YOUR OWN RISK, FOR WHICH WE SHALL NOT BE LIABLE. IT SHALL BE YOUR OWN RESPONSIBILITY TO ENSURE THAT SERVICES PROVIDED BY US MEET YOUR SPECIFIC REQUIREMENTS.</span>

          </Paragraph>
        </Content>
      </PageSection>
      {/* Add your content components below */}
     
    </PageContainer>
     <Footer/>
     </>
  );
};

export default RefundPolicy;
