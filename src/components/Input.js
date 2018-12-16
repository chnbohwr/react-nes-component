import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colorwhite, colorblack, colorMap } from './config';

const generateBorder = color => `
  background-color: ${colorMap[color].background}
  outline-color: ${colorMap[color].hoverBackground};
  // prettier-ignore
  box-shadow:
    0 4px ${colorMap[color].shadow},
    0 -4px ${colorMap[color].shadow},
    4px 0 ${colorMap[color].shadow},
    -4px 0 ${colorMap[color].shadow};
`;

const Input = styled.input`
  max-width: 100%;
  border: none;
  font-family: "Press Start 2P";
  ${p => generateBorder(p.color)}
`;

Input.propTypes = {
  color: PropTypes.oneOf(['normal', 'primary', 'success', 'warning', 'error']),
};

Input.defaultProps = {
  color: 'normal'
};

export default Input;
