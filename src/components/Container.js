import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colorblack, colorwhite } from './config';

const StyleContainer = styled.div`
position: relative;
  padding: 1.5rem 2rem;
  color: ${p => (p.isDark ? colorwhite : colorblack)};
  padding-top: ${p => (p.hasTitle ? '2rem' : null)};

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
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
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
  }

  font-family: "Press Start 2P";
`;

const StyleTitle = styled.p`
  display: table;
  padding: 0 0.5rem;
  margin: -2rem 0 1rem;
  font-size: 1rem;
  color: ${p => (p.isDark ? colorwhite : colorblack)}
  background-color: ${p => (p.isDark ? colorblack : colorwhite)}
`;

const Container = ({
  title, isDark,
  isRounded, alignment,
  children,
}) => (
    <StyleContainer isDark={isDark} isRounded={isRounded} hasTitle={!!title}>
      {title ? <StyleTitle isDark={isDark}>{title}</StyleTitle> : null}
      {children}
    </StyleContainer>
  );


Container.propTypes = {
  title: PropTypes.string,
  isDark: PropTypes.bool,
  isRounded: PropTypes.bool,
  alignment: PropTypes.oneOf(['left', 'center', 'right']),
  children: PropTypes.any,
};

Container.defaultProps = {
  title: '',
  isDark: false,
  isRounded: false,
  alignment: 'left',
  children: '',
};

export default Container;
