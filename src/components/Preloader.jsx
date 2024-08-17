import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for the animations
const loaderAnimation = keyframes`
  0%, 10%, 100% {
    width: 86px;
    height: 86px;
  }
  65% {
    width: 150px;
    height: 150px;
  }
`;

const loaderBlockAnimation = keyframes`
  0%, 30% {
    transform: rotate(0);
  }
  55% {
    background-color: #6689ff;
  }
  100% {
    transform: rotate(90deg);
  }
`;

const loaderBlockInverseAnimation = keyframes`
  0%, 20% {
    transform: rotate(0);
  }
  55% {
    background-color: #6689ff;
  }
  100% {
    transform: rotate(-90deg);
  }
`;

// Styled components for Preloader
const PreloaderContainer = styled.div`
  position: fixed;
  text-align: center;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  z-index: 9999999;
  background: #ffffff;
  transition: 0.3s all ease;

  &.loaded {
    opacity: 0;
    visibility: hidden;
    z-index: -1;

    .cssload-container {
      animation: none;
    }

    .cssload-container span {
      animation: none;
    }
  }

  &.ending {
    display: none;
  }

  [data-x-mode='design-mode'] & {
    opacity: 0;
    visibility: hidden;
    z-index: -1;
  }
`;

const PreloaderBody = styled.div`
  position: relative;
  text-align: center;
  height: 200px;
  width: 100%;
`;

const CssLoadContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80px;
  height: 80px;
  transform: translate(-50%, -50%) rotate(45deg) translate3d(0, 0, 0);
  animation: ${loaderAnimation} 1.2s infinite ease-in-out;

  span {
    position: absolute;
    display: block;
    width: 40px;
    height: 40px;
    background-color: #6689ff;

    &:nth-child(1) {
      top: 0;
      left: 0;
    }

    &:nth-child(2) {
      top: 0;
      right: 0;
      animation: ${loaderBlockInverseAnimation} 1.2s infinite ease-in-out both;
    }

    &:nth-child(3) {
      bottom: 0;
      left: 0;
      animation: ${loaderBlockInverseAnimation} 1.2s infinite ease-in-out both;
    }

    &:nth-child(4) {
      bottom: 0;
      right: 0;
    }
  }
`;

const Preloader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 2000); // Simulating loading time
    return () => clearTimeout(timeout);
  }, []);

  return (
    <PreloaderContainer className={isLoaded ? 'preloader loaded' : 'preloader'}>
      <PreloaderBody>
        <CssLoadContainer className="cssload-container">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </CssLoadContainer>
      </PreloaderBody>
    </PreloaderContainer>
  );
};

export default Preloader;
