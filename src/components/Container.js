import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colorblack, colorwhite } from './config';

const rounded = ($base, $background) => `
border: none;
border-radius: 0;
box-shadow:
  0 -4px ${$background},
  0 -8px ${$base},
  4px 0 ${$background},
  4px -4px ${$base},
  8px 0 ${$base},
  0 4px ${$background},
  0 8px ${$base},
  -4px 0 ${$background},
  -4px 4px ${$base},
  -8px 0 ${$base},
  -4px -4px ${$base},
  4px 4px ${$base};
`;

const StyleContainer = styled.div`
  position: relative;
  padding: ${p => (p.isRounded ? '1rem 1.5rem' : '1.5rem 2rem')};
  color: ${p => (p.isDark ? colorwhite : colorblack)};
  padding-top: ${p => (p.hasTitle ? '2rem' : null)};
  margin: ${p => (p.isRounded ? '14px 8px' : 'none')};

  > :last-child {
    margin-bottom: 0;
  }

  &::before,
  &::after {
    position: absolute;
    z-index: -1;
    content: "";
  }

  &::before {
    top: ${p => (p.isRounded ? -8 : 0)}px;
    right: ${p => (p.isRounded ? -8 : 0)}px;
    bottom: ${p => (p.isRounded ? -8 : 0)}px;
    left: ${p => (p.isRounded ? -8 : 0)}px;
    background-color:${p => (p.isDark ? colorblack : colorwhite)};
  }

  &::after {
    top: 2px;
    right: 2px;
    bottom: 2px;
    left: 2px;
    border-color: ${p => (p.isDark ? colorwhite : colorblack)};
    border-style: solid;
    border-width: 4px;
    border-radius: 4px;
    ${p => (p.isRounded ? (p.isDark ? rounded(colorblack, colorwhite) : rounded(colorwhite, colorblack)) : '')};
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
