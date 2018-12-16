import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colorblack, colorwhite, colorMap } from './config';

const borderSize = 4;

const generateColor = type => (colorMap[type] ? colorMap[type].color : colorMap.normal.color);
const generateBackground = type => (colorMap[type] ? colorMap[type].background : colorMap.normal.background);
const generateHoverBackground = type => (colorMap[type] ? colorMap[type].hoverBackground : colorMap.normal.hoverBackground);
const generateShadow = type => (colorMap[type] ? colorMap[type].shadow : colorMap.normal.shadow);

const StyleButton = styled.button`
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

const Button = ({type, children, ...props}) => (
  <StyleButton type={type} {...props}>{children}</StyleButton>
);

Button.propTypes = {
  type: PropTypes.oneOf(['normal', 'primary', 'success', 'warning', 'error']),
};

Button.defaultProps = {
  type: 'normal'
};

export default Button;
