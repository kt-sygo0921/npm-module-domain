import * as React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const imgSrc1 = 'https://placekitten.com/300/300';
const imgSrc2 = 'https://placekitten.com/500/500';
const imgSrc3 = 'https://placekitten.com/400/400';

const PosRel = styled.div`
    position: relative;
`;

const SpinnerAnimation1 = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Yake1 = styled.div`
    width: 300px;
    height: 300px;
    & img{
        border-radius: 300px;
    }
    animation: ${SpinnerAnimation1} 0.1s infinite linear;
`;

const BoundAnimation1 = keyframes`
    0% {
        transform: translateY(0) scaleY(1);
    }
    50% {
        transform: translateY(1000px) scaleY(1.5);
    }
    100% {
        transform: translateY(0px) scaleY(0.5);
    }
`;

const Yake2 = styled.div`
    width: 500px;
    height: 500px;
    & img{
        border-radius: 500px;
    }
    animation: ${BoundAnimation1} 0.3s infinite linear;
`;

const SpinnerAnimation2 = keyframes`
    0% {
        transform: rotateY(0deg);
    }
    100% {
        transform: rotateY(360deg);
    }
`;

const Yake3 = styled.div`
    position: absolute;
    right: 0;
    width: 400px;
    height: 400px;
    & img{
        border-radius: 400px;
    }
    animation: ${SpinnerAnimation2} 0.1s infinite linear;
`;

const Wrapper = styled.div`
    min-height: 2000px;
    background: #ffc;
`;

const Yakekuso: React.FC = () => {
    return (
        <Wrapper>
            <PosRel>
                <Yake1><img src={imgSrc1} alt="" /></Yake1>
            </PosRel>
            <PosRel>
                <Yake2><img src={imgSrc2} alt="" /></Yake2>
            </PosRel>
            <PosRel>
                <Yake3><img src={imgSrc3} alt="" /></Yake3>
            </PosRel>
        </Wrapper>
    );
}

export default Yakekuso;