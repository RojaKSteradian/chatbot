import React from "react";
import InnotratContainer from "../components/layout-components/Container";
import Navbar from "../components/layout-components/Navbar";
import Footer from "../components/layout-components/Footer";
import SignUpSide from "../components/auth/signup/SignUpSide";

const Signup = () => {
  return (
    <React.Fragment>
      <Navbar />
      <InnotratContainer>
        <SignUpSide />
      </InnotratContainer>
      <Footer />
    </React.Fragment>
  );
};

export default Signup;
