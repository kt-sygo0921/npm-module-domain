import * as React from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/core'

const SpinnerAnimation = keyframes`
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`;

const SpinnerCommon = css`
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  transform: translateZ(0);
  animation: ${SpinnerAnimation} 0.6s infinite linear;
`;

const SpinnerSmall = styled.p`
    ${SpinnerCommon}
    border-top: 2px solid rgba(0,0,0, 0.15);
    border-right: 2px solid rgba(0,0,0, 0.15);
    border-bottom: 2px solid rgba(0,0,0, 0.15);
    border-left: 2px solid rgba(0,0,0, 0.4);
    &, &:after {
        border-radius: 50%;
        width: 16px;
        height: 16px;
    }
`;

// TODO: とりあえずサイズ指定なし
const Spinner: React.FC = () => {
    return (
        <SpinnerSmall></SpinnerSmall>
    );
}

export default Spinner;