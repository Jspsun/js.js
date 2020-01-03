import React from 'react';
import Styled, { keyframes } from 'styled-components';
import { darken } from 'polished';
import { red, grey } from '../../constants/colors';

const gravitationConst = 6.673;
const t = 1.92;

export default function SimpleOrbitPlanet() {
  const Container = Styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20%;
  `;

  const Planet = Styled.div`
    background: ${red};
    box-shadow: inset -30px -30px 0px ${darken(0.02, red)};
    width: 200px;
    height: 200px;
    border-radius: 100%;
    &:before {
      content: '';
      background-color: ${darken(0.05, red)};
      border-radius: 100%;
      width: 20px;
      height: 20px;
      display: block;
      margin: 50px 100px;
    }
    &:after {
      content: '';
      background: ${darken(0.04, red)};
      border-radius: 100%;
      width: 50px;
      height: 50px;
      display: block;
      margin: -20px 40px;
    }
  `;

  const orbit = keyframes`
    to {
      transform: rotate(360deg);
    }
  `;

  const Orbit = Styled.div`
    width: 300px;
    height: 300px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    position: absolute;
    border-radius: 100%;
    margin: -50px auto;
  animation: ${orbit} ${gravitationConst * t}s linear infinite;
  `;

  const Moon = Styled.div`
    background: #9E9E9E;
    box-shadow: inset -7px -7px 0 ${darken(0.07, grey)};
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin: 20px;
    &:before {
      content: '';
      background: ${darken(0.04, grey)};
      border-radius: 100%;
      width: 9px;
      height: 9px;
      display: inline-block;
      margin: 10px 10px;
    }
    &:after {
      content: '';
      background: ${darken(0.04, grey)};
      border-radius: 100%;
      width: 9px;
      height: 9px;
      display: block;
      margin: -7px 20px;
    }
  `;

  return (
    <Container>
      <Planet />
      <Orbit>
        <Moon />
      </Orbit>
    </Container>
  );
}
