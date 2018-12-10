import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colorblack, colorwhite } from './config';

const generateRoundBorder = (backgroundColor, borderColor) => `
  box-shadow:
    0 -4px ${backgroundColor},
    0 -8px ${borderColor},
    4px 0 ${backgroundColor},
    4px -4px ${borderColor},
    8px 0 ${borderColor},
    0 4px ${backgroundColor},
    0 8px ${borderColor},
    -4px 0 ${backgroundColor},
    -4px 4px ${borderColor},
    -8px 0 ${borderColor},
    -4px -4px ${borderColor},
    4px 4px ${borderColor},
    0 0 0 12px ${backgroundColor};
`;

const generateSolidBorder = (backgroundColor, borderColor) => `
  box-shadow:
    0 0 0 4px ${borderColor},
    0 0 0 8px ${backgroundColor};
`;

const generateAfterSize = isRounded => `
  top: ${isRounded ? '12px' : '8px'};
  right: ${isRounded ? '12px' : '8px'};
  bottom: ${isRounded ? '12px' : '8px'};
  left: ${isRounded ? '12px' : '8px'};
`;

const generateBorder = (isDark, isRounded) => {
  if (isRounded) {
    if (isDark) {
      return generateRoundBorder(colorblack, colorwhite);
    }
    return generateRoundBorder(colorwhite, colorblack);
  }
  if (isDark) {
    return generateSolidBorder(colorblack, colorwhite);
  }
  return generateSolidBorder(colorwhite, colorblack);
};

const generateMargin = (isDark, isRounded) => {
  if (isDark && isRounded) { return 'margin: 12px 12px;'; }
  if (!isDark && isRounded) { return 'margin: 10px 8px;'; }
  return '';
}

const StyleContainer = styled.div`
  position: relative;
  padding: ${p => (p.isRounded ? '16px' : '12px')};
  color: ${p => (p.isDark ? colorwhite : colorblack)};
  background-color: ${p => (p.isDark ? colorblack : colorwhite)};


  &:after{
    position: absolute;
    ${p => generateAfterSize(p.isRounded)}
    content: "";
    ${p => generateBorder(p.isDark, p.isRounded)}
  }

  > :last-child {
    margin-bottom: 0;
  }

  font-family: "Press Start 2P";
`;

const StyleTitle = styled.p`
  display: table;
  padding: 0 0.5rem;
  margin: ${p => (p.isRounded ? -2.2 : -2)}rem 0 1rem;
  font-size: 1rem;
  color: ${p => (p.isDark ? colorwhite : colorblack)};
  background-color: ${p => (p.isDark ? colorblack : colorwhite)};
`;

const Container = ({ title, isDark, isRounded, children, ...props }) => (
  <StyleContainer isDark={isDark} isRounded={isRounded} hasTitle={!!title} {...props}>
    {title ? <StyleTitle isRounded={isRounded} isDark={isDark}>{title}</StyleTitle> : null}
    {children}
  </StyleContainer>
);


Container.propTypes = {
  title: PropTypes.string,
  isDark: PropTypes.bool,
  isRounded: PropTypes.bool,
  children: PropTypes.any,
};

Container.defaultProps = {
  title: '',
  isDark: false,
  isRounded: false,
  children: '',
};

export default Container;
