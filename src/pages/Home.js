import React from "react";
import InnotratContainer from "../components/layout-components/Container";
import Navbar from "../components/layout-components/Navbar";
import Footer from "../components/layout-components/Footer";
import BannerText from "../components/home/BannerText";
import SwipeableVideo from "../components/home/SwipeableVideo";
import SupportEngine from "../SupportEngine";
// import HeroSection from "../components/layout-components/heroSection";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <InnotratContainer>
        <BannerText />
        <SwipeableVideo />
      </InnotratContainer>
      <Footer />
      <SupportEngine/>
      {/* <HeroSection/> */}

    </React.Fragment>
  );
};

export default Home;
