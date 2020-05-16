import React from 'react';
import PropTypes from 'prop-types';
import Styled, { keyframes } from 'styled-components';
import { darken } from 'polished';
import { red, grey, transparentGrey } from '../../constants/colors';

const gravitationConst = 6.673;
const t = 1.92;

export default function SimpleOrbitPlanet(props) {
  const Container = Styled.div`
    display: flex;
    justify-content: center;
    margin-top: ${(props.orbitRadius - props.planetRadius) / 2}px;
  `;

  const Planet = Styled.div`
    background: ${red};
    box-shadow: inset -${props.planetRadius / 10}px -${props.planetRadius / 10}px 0px ${darken(0.02, red)};
    width: ${props.planetRadius}px;
    height: ${props.planetRadius}px;
    border-radius: 100%;
    &:before {
      content: '';
      background-color: ${darken(0.05, red)};
      border-radius: 100%;
      width: 10%;
      height: 10%;
      display: block;
      margin: 25% 50%;
    }
    &:after {
      content: '';
      background: ${darken(0.04, red)};
      border-radius: 100%;
      width: 25%;
      height: 25%;
      display: block;
      margin: -10% 20%;
    }
  `;

  const orbit = keyframes`
    to {
      transform: rotate(360deg);
    }
  `;

  const Orbit = Styled.div`
    width: ${props.orbitRadius}px;
    height: ${props.orbitRadius}px;
    border: 1px solid ${transparentGrey};
    position: absolute;
    border-radius: 100%;
    margin: -${(props.orbitRadius - props.planetRadius) / 2}px auto;
    animation: ${orbit} ${gravitationConst * t}s linear infinite;
  `;

  const Moon = Styled.div`
    background: ${grey};
    box-shadow: inset -7px -7px 0 ${darken(0.07, grey)};
    width: ${props.moonRadius}px;
    height: ${props.moonRadius}px;
    border-radius: 100%;
    margin: ${props.moonRadius * 0.5}px;
    /* &:before {
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
    } */
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

SimpleOrbitPlanet.propTypes = {
  orbitRadius: PropTypes.number.isRequired,
  planetRadius: PropTypes.number.isRequired,
  moonRadius: PropTypes.number.isRequired,
};
