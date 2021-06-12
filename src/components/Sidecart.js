import React from "react";
import { ProductConsumer } from "../context";
import styled from "styled-components";

export default function Sidecart() {
  return (
    <ProductConsumer>
      {(value) => {
        const { cartOpen, closeCart, cart } = value;

        return (
          <CartWrapper show={cartOpen} onClick={closeCart}>
            <p>cart items</p>
          </CartWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const CartWrapper = styled.div`
  background: var(--mainGrey);
  border-left: 4px solid var(--primaryColor);
  position: fixed;
  top: 60px;
  transition: var(--mainTransition);
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  @media (min-width: 576px) {
    width: 20rem;
  }
`;
