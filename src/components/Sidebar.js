import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

export default function Sidebar() {
  return (
    <ProductConsumer>
      {(value) => {
        const { links, sidebarOpen, handleSidebar } = value;
        return (
          <SideWrapper show={sidebarOpen}>
            <ul>
              {links.map((link) => {
                return (
                  <li key={link.id}>
                    <Link
                      to={link.path}
                      className="sidebar-link"
                      onClick={handleSidebar}
                    >
                      {link.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </SideWrapper>
        );
      }}
    </ProductConsumer>
  );
}
const SideWrapper = styled.nav`
  background: var(--mainGrey);
  border-right: 4px solid var(--primaryColor);
  height: 100%;
  position: fixed;
  top: 61px;
  left: 0;
  transition: var(--mainTransition);
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(-100%)")};
  width: 100%;
  z-index: 1;
  ul {
    list-style-type: none;
    padding: 0;
  }
  .sidebar-link {
    background: transparent;
    color: var(--mainblack);
    display: block;
    font-size: 1.5rem;
    text-decoration: none;
    text-transform: capitalize;
    transition: var(--mainTransition);
    padding: 0.5rem 1.5rem;
  }
  .sidebar-link:hover {
    background-color: var(--primaryColor);
    color: var(--mainWhite);
    padding: 0.5rem 1.5rem 0.5rem 2.5rem;
  }

  @media (min-width: 576px) {
    width: 20rem;
  }
`;
