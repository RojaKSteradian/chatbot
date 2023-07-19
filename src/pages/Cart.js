import React, { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import styled from "@emotion/styled";
import Navbar from "../components/layout-components/Navbar";
import { CartState } from "../components/context/Context";

const Wrapper = styled.div`
  /* background-color :#93fffc; */
  height: 100%;
  background: url("./images/services/cart-background.jpg");
  background-size: cover;
  object-fit: cover;
  background-attachment: fixed;
  background-position: center;
  position: sticky;

  .navbar {
    max-height: 5rem;
    z-index: 999;
  }
  .head {
    font-size: 2.8rem;
    font-weight: 200;
    color: gray;
    text-align: center;
    margin-top: 5rem;
  }
  .top-data {
    display: flex;
    justify-content: space-between;
    .left-btn {
      background-color: #fff;
      color: black;
      font-weight: 600;
      padding: 0.7rem 1rem;
      transition: all 0.3s ease-in-out;
      margin: 0rem 2rem 2rem 2rem;
      &:hover {
        transform: scale(0.96);
        background-color: #dbd3d3;
      }
    }
    .right-btn {
      background-color: #000;
      color: white;
      font-weight: 600;
      margin: 0rem 2rem 2rem 2rem;
      padding: 0.8rem 1.4rem;
      transition: all 0.3s ease-in-out;
      &:hover {
        transform: scale(0.96);
        background-color: #dbd3d3;
        color: black;
      }
    }
  }
  .cart {
    display: flex;
    max-width: 100%;
    .cart-control {
      display: flex;
      flex-direction: column;
      flex: 5;
      max-width: 100%;
      gap: 2rem;
      .head-bar {
        display: flex;
        justify-content: space-between;
        height: 3rem;
        max-width: 82.5%;
        background-color: #fff2dc;
        align-items: center;
        padding: 0rem 2rem;
        margin-left: 2rem;
        border: 0.1rem ridge black;
        p {
          margin: auto 0;
        }
      }
      .items {
        padding: 0 2rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        max-width: 100%;
      }
    }

    .check-out {
      flex: 4;
      max-height: 30rem;
      max-width: 40rem;
      background-color: #6d6d6d7a;
      color: white;
      margin-right: 16.5rem;
      padding: 3rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
        rgba(0, 0, 0, 0.22) 0px 15px 12px;
      h2 {
        text-align: left;
        font-size: 1.9rem;
        font-weight: 700;
      }
      .first-line {
        opacity: 0.2;
      }
      .sub-total {
        display: flex;
        justify-content: space-between;
        .total {
          font-size: 1.5rem;
          font-weight: 600;
        }
        .price {
          font-size: 1.5rem;
          font-weight: 200;
        }
      }
      .discount {
        display: flex;
        justify-content: space-between;
        font-size: 1.5rem;
        .discount-title {
          font-weight: 600;
        }
        .discount-number {
          font-weight: 200;
        }
      }
      .checkout-btn {
        text-align: center;
        .check-btn {
          background-color: #c9680c;
          color: white;
          border: none;
          transition: all 0.3s ease-in-out;
          padding: 1.15rem 7rem;
          font-weight: 600;
          &:hover {
            transform: scale(0.96);
          }
        }
      }
      .we-accept {
        font-size: 1.25rem;
        font-weight: 700;
        color: white;
      }
      .payment-methods {
        display: flex;
        gap: 0.7rem;

        img {
          max-width: 100%;
          height: 2.3rem;
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .head {
      font-size: 2rem;
    }
    .top-data {
      .left-btn {
        padding: 0.5rem 0.6rem;
        font-size: 0.9rem;
      }
      .right-btn {
        padding: 0.6rem 1rem;
        font-size: 0.9rem;
      }
    }
    .cart {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      .cart-control {
        .head-bar {
          margin: auto;
          gap: 3rem;
          font-size: 1rem;
          max-width: 100%;
        }
        .items {
          gap: 1rem;
        }
      }
      .check-out {
        margin: auto;
        max-width: 100%;
        max-height: 20rem;
        padding: 1rem 2rem;
        gap: 0.5rem;
        h2 {
          font-size: 1.2rem;
        }
        .sub-total {
          .total {
            font-size: 1.2rem;
          }
          .price {
            font-size: 1.2rem;
          }
        }
        .discount {
          .discount-title {
            font-size: 1.2rem;
          }
          .discount-number {
            font-size: 1.2rem;
          }
        }
        .checkout-btn {
          .check-btn {
            padding: 1rem 4rem;
            font-size: 1.2rem;
          }
        }
        .we-accept {
          font-size: 1.1rem;
        }
        .payment-methods {
          img {
            height: 1.5rem;
          }
        }
      }
    }
  }
`;

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const Cart = () => {
  const handleCheckout = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    // const data = await fetch('http://localhost:3000/cart', { method: 'POST' }).then((t) =>
    // 	t.json()

    // )
    // console.log("roja",data)
    const options = {
      key: "rzp_live_XW1aRH5Ec9HhVz",
      amount: amount * 100, // Convert the amount to the smallest currency unit (in this case, paise)
      currency: "INR",
      name: "Innotrat",
      description: "Payment for the products",
      // order_id: orderId,
      handler: function (response) {
        // Handle the payment success response
        console.log("Payment success!", response);

        // Update the UI or perform any necessary actions
        // For example, redirect to a success page or show a success message

        // Implement your own logic here...
      },
      prefill: {
        name: "John Doe",
        email: "john.doe@example.com",
        contact: "+91 9092353868",
      },
      notes: {
        address: "Address Line 1",
      },
      theme: {
        color: "#528FF0",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <React.Fragment>
      <Wrapper>
        <div className="navbar">
          <Navbar />
        </div>
        <div className="head">YOUR CART</div>
        <div className="top-data">
          <button className="left-btn">CONTINUE SHOPPING</button>
          <button className="right-btn">CHECKOUT NOW</button>
        </div>
        <div className="cart">
          <div className="cart-control">
            <div className="head-bar">
              <h3>{cart.length} Courses In Cart</h3>
              <p>items reserved for 30 minutes</p>
            </div>
            <div className="items">
              {cart.map((prod) => (
                <CartItem key={prod.id} prod={prod} />
              ))}
            </div>
          </div>
          <div className="check-out">
            <h2>TOTAL</h2>
            <hr className="first-line"></hr>
            <div className="sub-total">
              <div className="total">Sub-total</div>
              <div className="price">&#8377; {total} </div>
            </div>
            <div className="discount">
              <div className="discount-title">Discount</div>
              <div className="discount-number">&#8377; 0</div>
            </div>
            <hr></hr>
            <div className="checkout-btn">
              <button className="check-btn" onClick={()=>handleCheckout(total)}>CHECKOUT NOW</button>
            </div>
            <div className="we-accept">WE ACCEPT :</div>
            <div className="payment-methods">
              <img src="./images/services/razorpay1.png" alt="razorpay" />
              <img src="./images/services/phonepay.jpg" alt="razorpay" />
              <img src="./images/services/paytm.jpg" alt="razorpay" />
              <img src="./images/services/mastercard.png" alt="razorpay" />
              <img src="./images/services/visa.png" alt="razorpay" />
            </div>
          </div>
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default Cart;
