import React, { Component } from "react";
import styled from "styled-components";
import { FaDolly, FaRedo, FaDollarSign } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        id: 1,
        icon: <FaDolly />,
        title: "free shipping",
        text: "lorem106 Lorem ipsum dolor sit amet consectetur adipisicing lorem106 Lorem ipsum dolor sit amet consectetur adipisicing",
      },

      {
        id: 2,
        icon: <FaRedo />,
        title: "30 days return policy",
        text: "lorem106 Lorem ipsum dolor sit amet consectetur adipisicing lorem106 Lorem ipsum dolor sit amet consectetur adipisicing",
      },

      {
        id: 3,
        icon: <FaDollarSign />,
        title: "secured payment",
        text: "lorem106 Lorem ipsum dolor sit amet consectetur adipisicing lorem106 Lorem ipsum dolor sit amet consectetur adipisicing",
      },
    ],
  };
  render() {
    return (
      <ServicesWrapper className="py-5">
        <div className="container">
          <div className="row">
            {this.state.services.map((service) => {
              return (
                <div
                  className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3"
                  key={service.id}
                >
                  <div className="service-icon">{service.icon}</div>
                  <div className="mt-3 text-capitalize title">
                    {service.title}
                  </div>
                  <div className="mt-2 text-align">{service.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </ServicesWrapper>
    );
  }
}

const ServicesWrapper = styled.section`
  background: rgba(95, 185, 243, 0.5);

  .service-icon {
    font-size: 2.5rem;
    color: var(--primaryColor);
  }
  p {
    color: var(--darkGrey);
  }

  .text-align {
    text-align: justify;
    font-size: 0.85rem;
    font-style: italic;
    font-weight: bold;
  }
  .title {
    font-size: 1.2rem;
    font-style: bold;
  }
`;
