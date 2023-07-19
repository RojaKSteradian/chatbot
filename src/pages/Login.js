import React from "react";
import InnotratContainer from "../components/layout-components/Container";
import Navbar from "../components/layout-components/Navbar";
import Footer from "../components/layout-components/Footer";
import SignInSide from "../components/auth/login/SignInSide";

const Login = () => {
  return (
    <React.Fragment>
      <Navbar />
      <InnotratContainer>
        <SignInSide />
      </InnotratContainer>
      <Footer />
    </React.Fragment>
  );
};

export default Login;
