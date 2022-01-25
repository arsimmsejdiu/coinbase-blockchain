import React from "react";
import styled from "styled-components";

const Dashboard = ({ address }) => {
  return (
    <Wrapper>
      <AddressConnect>
        <Title>Wellcome Back</Title>
        <Details>{address}</Details>
      </AddressConnect>
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  max-width: 100vw;
  background-color: #0a0b0d;
  color: white;
  display: grid;
  place-items: center;
`;

const Title = styled.h1`
  border: 1px solid #282b2f;
  padding: 0.8rem;
  font-size: 1.3rem;
  font-weight: 600;
  border-radius: 0.4rem;
  background-color: #3773f5;
  color: #000;
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const Details = styled.div`
  font-size: 1.2rem;
  text-align: center;
  margin-top: 1rem;
  font-weight: 500;
  color: #282b2f;
`;

const AddressConnect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
