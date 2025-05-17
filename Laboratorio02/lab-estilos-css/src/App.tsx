import React from 'react';
import logo from './logo.svg';
import './App.css';
import Switch from './components/Switch';
import Card from './components/Card';
import Button from './components/Button';
import styled from 'styled-components';


function App() {
  return (
    <BlackBg>
      <WhiteContainer>
        <MainContainer>
          <YellowBox>
            <Switch />
          </YellowBox>
          <YellowBox>
            <Card />
          </YellowBox>
          <YellowBox>
            <Button />
          </YellowBox>
        </MainContainer>
      </WhiteContainer>
    </BlackBg>
  );
}

const BlackBg = styled.div`
  background: #000;
  width: 100%;
  min-height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WhiteContainer = styled.div`
  background: #fff;
  border-radius: 32px;
  padding: 32px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 0 8px #000;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const YellowBox = styled.div`
  background: #ffc107;
  border-radius: 24px;
  margin: 0 16px;
  padding: 32px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 220px;
  min-height: 120px;
  max-width: 220px;
  max-height: 120px;
  box-shadow: 0 0 0 8px #fff;
`;

export default App;