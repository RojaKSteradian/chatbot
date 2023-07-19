import React from "react";
import styled from "@emotion/styled";
// import { Button } from "../styles/Button";

const Wrapper = styled.div`
  .imageContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rem 0;
    img {
      max-width: 100%;
      height: 50rem;
    }
  }

  .InfoContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2rem;
    padding: 4rem 4rem 4rem 0rem;

    h2 {
      font-size: 2.7rem;
      font-weight: 600;
    }

    li {
      font-size: 1.4rem;
      font-weight: 600;
      list-style-type: square;
      margin-bottom: 0.6rem;
    }

    .price {
      font-size: 2rem;
      font-weight: 700;
      color: #00000082;
    }

    .CouponContainer {
      .btn {
        background-color: ${({ theme }) => theme.colors.black};
        color: #fff;
        margin-left: 1rem;
        height : 3rem;
        padding : 0.5rem 1rem;

        &:hover{
          transform : scale(0.96);
        }
      }

      .Input {
        max-width: auto;
        height: 3rem;
        padding: 0rem 1rem;
      }
    }

    .CartButton {
      .AddButton {
        height: 3rem;
        display : flex;
        justify-content: center;
        align-items: center;
        padding: 0.3rem 0.8rem;
        background-color: lightgray;
        color: black;
        border: none;
        &:hover {
          transform: scale(0.95);
          background-color: #f0e6e6;
          border: 0.1rem solid gray;
        }
      }
    }
  }

  @media (max-width: ${({theme})=> theme.media.mobile}){
    .grid{
      grid-gap : 0.5rem;
    }
    .imageContainer {
      padding : 2rem 0;
      img{
      height : 30rem;
    }
  }
    .InfoContainer{
      padding : 0 3.2rem;
    }
  }
`;

const Course3= () => {
  return (
    <>
      <Wrapper>
        <div className="grid grid-two-columns">
          <div className="imageContainer">
            <img src="./images/iotCourse.jpg" alt="NotFound" />
          </div>

          <div className="InfoContainer">
            <h2>IOT/Embedded Hardware Security</h2>
            <ul>
            <li>
              Introduction to hardware security, concept of finite fields, AES
              encryption, S-Box
            </li>
            <li>
              Algorithms applied to hardware, fundamental concepts behind on
              elliptic curve cryptography (ECC), Implementation and hardware
              design of ECC
            </li>
            <li>
              Understanding Side Channel Analysis (SCA), Fault Attacks and
              Algebraic Fault Analysis
            </li>
            <li>Estimation of threat and countermeasures</li>
            <li>
              Diving deep into physical unclonable functions (PUFs) and design
              on FPGAs, Machine Learning application into PUFs
            </li>
            <li>Design-for-Testability for Cryptographic Designs</li>
            <li>
              Protocols for security implementations and Micro-architectural
              attacks
            </li>
            <li>
              Hardware level monitoring for malwares using Hardware Performance
              Counters
            </li>
            <li>
              Lightweight cryptography for Internet of Things (IOT) devices,
              Trusted Platform Module (TPM) and circuits for embedded products
            </li>
            </ul>
            <div className="price">&#8377; 2999</div>
            <div className="CouponContainer">
              <input placeholder="Use FIRST10" className="Input" />
              <button className="btn">Apply</button>
            </div>

            <div className="CartButton">
              <div className="AddButton">ADD TO CART</div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Course3;
