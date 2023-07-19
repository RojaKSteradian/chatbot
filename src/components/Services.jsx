import React from "react";
import styled from "@emotion/styled";
import Card from "./services/card";
import HeroSection from "./layout-components/heroSection";
import Navbar from "./layout-components/Navbar";
import { CartState } from "./context/Context";



const Wrapper = styled.div`
  padding: 6rem 0;
  /* background-color: #fbfbfbeb; */

  .container1 {
    max-width: 100rem;
  }
`;

const Header = styled.h2`
text-align: center;
  font-weight: 600;
  margin: 3rem;
  `;

const Service = () => {
 const {
  state: {popularCourse},
  } = CartState();
 console.log(popularCourse);
  return (
      <Wrapper>
        <Navbar />
        <HeroSection />
        <Header className="common-heading">OUR PROGRAMMES</Header>
          <div className="container1 grid grid-three-column">
          {popularCourse.map((item) => (
          <Card item={item}/>
        ))}
      </div>
    </Wrapper>
  );
};

export default Service;
