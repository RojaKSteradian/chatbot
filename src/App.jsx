import React from "react";
// import Header from "./components/layout-components/header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import Services from "./pages/Services";
import Chat from "./pages/Chat";
import VerifyOtp from "./pages/VerifyOtp"
import VerifyResetOtp from "./pages/VerifyResetPassword";
import Course1 from "./components/services/courses/course1";
import Course2 from "./components/services/courses/course2";
import Course3 from "./components/services/courses/course3";
import Course4 from "./components/services/courses/course4";
import Cart from "./pages/Cart";
// import Contact from "./pages/Contact";
import { ThemeProvider } from "@emotion/react";
import TermsAndConditions from "./components/TermsAndConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ContactUs from "./components/ContactUs";
import RefundPolicies from "./components/RefundPolicies";
// Custom PrivateRoute component to protect routes
const PrivateRoute = ({ component: Component, ...rest }) => {
  // Check if mobile_number and token cookies exist
  const hasCookies = !!document.cookie.match(/mobile_number=.*;?\s*$/) && !!document.cookie.match(/token=.*;?\s*$/);
  
  return hasCookies ? <Component {...rest} /> : <Navigate to="/eureka" />;};


function App() {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0,0,0,0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
      shadowSupport: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "760px", tab: "998px" },
  };
  return (
    <>
    <ThemeProvider theme={theme}>
      
       <BrowserRouter>
       {/* <Header /> */}

        <Routes>
          <Route path="/eureka" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/verifyResetOtp" element={<VerifyResetOtp />} />
          <Route path="/chat" element={<PrivateRoute component={Chat} />} />
          <Route exact path="/cart" element={<Cart />} />
          {/* <Route exact path="/contact" element={<Contact />} /> */}
          <Route exact path="/course1" element={<Course1 />} />
          <Route exact path="/course2" element={<Course2 />} />
          <Route exact path="/course3" element={<Course3 />} />
          <Route exact path="/course4" element={<Course4 />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policies" element={<RefundPolicies />} />
        {/* <Route path="course1" element={<Course1 />} /> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

    </>
  );
}

export default App;
