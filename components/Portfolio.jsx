import React from 'react';
import styled from 'styled-components';

const Portfolio = () => {
  return (
      <Wrapper>
          <Content>
          </Content>
      </Wrapper>
  )
};

export default Portfolio;

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`;

const Content = styled.div`
    width: 100%;
    max-width: 1000px;
    padding: 2rem 2rem;
`;

const PortfolioTable = styled.div`
    margin-top: 1rem;
    border: 1px solid #282b2f;
`;

const Table = styled.table`
    width: 100%;
`;

