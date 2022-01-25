//import { useEffect, useState } from "react"
import Head from "next/head";
import styled from "styled-components"
import { useWeb3 } from '@3rdweb/hooks';
import Dashboard from "../components/Dashboard";

export default function Home() {
  const { address, connectWallet } = useWeb3();
  return (
    <Wrapper>
      <Head>
        <title>Login - Coinbase Blockchain</title>
      </Head>
      {address ? (
        <Dashboard address={address}/>
      ) : (
        <WalletConnect>
          <Button onClick={() => connectWallet('injected')}>
            Connect Wallet
          </Button>
          <Details>
            You need Chrome to be
            <br /> able to run this app.
          </Details>
        </WalletConnect>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  max-width: 100vw;
  background-color: #0a0b0d;
  color: white;
  display: grid;
  place-items: center;
`;

const WalletConnect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
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
`
