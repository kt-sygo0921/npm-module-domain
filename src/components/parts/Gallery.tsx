import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Content = styled.div`
    width: 300px;
    margin: 0 20px 20px 0;
`;

const ImageArea = styled.p`
    line-height: 1;
    width: 300px;
    height: 200px;
    overflow: hidden;
`;

const Image = styled.img`
    width: 100%;
`;

const TextArea = styled.div`
    width: 300px;
    overflow: hidden;
`;

const Title = styled.p`
    font-weight: bold;
`;

const Caption = styled.p`
    font-weight: normal;
    color: #777;
    text-align: right;
`;

let ImgList: string[] = [];
let baseHeight = 900;
for(let i = 0, l = 50; i < l; i += 1) {
    const height = baseHeight + i;
    const src = 'https://placekitten.com/1200/' + height;
    ImgList.push(src);
}

const Gallery: React.FC = () => {
    return (
        <Wrapper>
            {ImgList.map((src) => (
                <Content key={src}>
                    <ImageArea><Image src={src} /></ImageArea>
                    <TextArea><Title>aaaaa</Title><Caption>bbbbbb</Caption></TextArea>
                </Content>
            ))}
        </Wrapper>
    );
}

export default Gallery;