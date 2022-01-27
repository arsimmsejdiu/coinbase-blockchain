import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Header from "../components/Header";
import Main from "../components/Main";

const Dashboard = ({ address }) => {
  return (
    <Wrapper>
      <Head>
        <title>Dashbord - Coinbase Blockchain</title>
      </Head>
      <MainContainer>
        <Header />
        <Main />
      </MainContainer>
    </Wrapper>
    
  );
};

export default Dashboard;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #0a0b0d;
  color: white;
`;

const MainContainer = styled.div`
  flex: 1;
`
