import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colorblack, colorwhite } from './config';

const borderSize = 4;

const colorMap = {
  normal: {
    color: colorblack,
    background: '#fff',
    hoverBackground: '#e7e7e7',
    shadow: '#adafbc'
  },
  primary: {
    color: colorwhite,
    background: '#209cee',
    hoverBackground: '#108de0',
    shadow: '#006bb3'
  },
  success: {
    color: colorwhite,
    background: '#92cc41',
    hoverBackground: '#76c442',
    shadow: '#4aa52e'
  },
  warning: {
    color: colorblack,
    background: '#f7d51d',
    hoverBackground: '#f2c409',
    shadow: '#e59400'
  },
  error: {
    color: colorwhite,
    background: '#e76e55',
    hoverBackground: '#ce372b',
    shadow: '#8c2022'
  },
};

const generateColor = type => (colorMap[type] ? colorMap[type].color : colorMap.normal.color);
const generateBackground = type => (colorMap[type] ? colorMap[type].background : colorMap.normal.background);
const generateHoverBackground = type => (colorMap[type] ? colorMap[type].hoverBackground : colorMap.normal.hoverBackground);
const generateShadow = type => (colorMap[type] ? colorMap[type].shadow : colorMap.normal.shadow);

const Button = styled.button`
  position: relative;
  display: inline-block;
  padding: 10px 12px;
  margin: ${borderSize}px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;

  color: ${p => generateColor(p.type)};
  background-color: ${p => generateBackground(p.type)};
  box-shadow: inset -4px -4px ${p => generateShadow(p.type)};

  &:hover,
  &:focus {
    background-color: ${p => generateHoverBackground(p.type)};
    box-shadow: inset -6px -6px ${p => generateShadow(p.type)};
  }

  &:active {
    box-shadow: inset 4px 4px ${p => generateShadow(p.type)};
  }

  &::before,
  &::after {
    position: absolute;
    box-sizing: content-box;
    width: 100%;
    height: 100%;
    content: "";
    border-color: ${colorblack};
    border-style: solid;
    border-width: ${borderSize}px;
  }

  &::before {
    top: ${borderSize * -1}px;
    left: 0;
    border-right: ${borderSize / 2}px;
    border-left: ${borderSize / 2}px;
  }

  &::after {
    top: 0;
    left: ${borderSize * -1}px;
    border-top: ${borderSize / 2}px;
    border-bottom: ${borderSize / 2}px;
  }

  &:focus {
    outline: 0;
  }

  font-family: "Press Start 2P";
`;

Button.propTypes = {
  type: PropTypes.oneOf(['normal', 'primary', 'success', 'warning', 'error']),
};

Button.defaultProps = {
  type: 'normal'
};

export default Button;
