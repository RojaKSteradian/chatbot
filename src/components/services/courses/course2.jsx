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

const Course2 = () => {
  return (
    <>
      <Wrapper>
        <div className="grid grid-two-columns">
          <div className="imageContainer">
            <img src="./images/electricCourse.jpg" alt="NotFound" />
          </div>

          <div className="InfoContainer">
            <h2>Electric Vehicle Design</h2>
            <ul>
            <li>
            An overview and brief history of Electric Vehicles, economy and environmental impact associated            </li>
            <li>
            (Classical) Motion (Kinematic/Dynamic) equation for electric vehicles
            </li>
            <li>
            System architectural design for electric drive power trains, power electronics (DC-DC, DC-AC converters)
             </li>
            <li>
            Energy source and storage, battery pack design (mechanical and thermal) and modern industrial practice
            </li>
            <li>EV motors, motion controllers design principles, efficienc</li>
            <li>EV (fast) charging infrastructure, swapping mechanisms and battery management at larger scale</li>
            <li>
            Lithium-Ion batteries and new advanced materials and electronics associated
            </li>
            <li>
            Understanding EV ecosystem in Indian, opportunity, recent trends, opportunities
            </li>
            <li>
            Advanced Research and Development, Industry-Academia Collaborations to explore further
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

export default Course2;
