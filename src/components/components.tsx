import * as React from 'react';
import fetch from 'unfetch';
import styled from '@emotion/styled';
import {Domain1} from '@kt-sygo0921/npm-module-domain';
import Header from './parts/Header';
import AjaxTest from './parts/AjaxTest';
import Gallery from './parts/Gallery';
import Yakekuso from './parts/Yakekuso';
import Footer from './parts/Footer';

const SectionBlock = styled.section`
    margin-bottom: 30px;
`;

const H2Title = styled.h2`
    font-size: 18px;
    line-height: 1.5;
    font-weight: bold;
    color: #333;
`;

const MainVis = styled.img`
    width: 100%;
`;

const Components: React.FC = () => {
    return (
        <>
            <Header />
            <h1>表示てすと</h1>
            <p><MainVis src="https://placekitten.com/3000/2000" alt="" /></p>

            <SectionBlock>
                <H2Title>非同期通信</H2Title>
                <AjaxTest />
            </SectionBlock>

            <SectionBlock>
                <H2Title>他のドメインのコンポーネントをimportして配置</H2Title>
                <Domain1 />
            </SectionBlock>

            <SectionBlock>
                <H2Title>画像貼りまくり</H2Title>
                <Gallery />
            </SectionBlock>

            <SectionBlock>
                <H2Title>やけくそ</H2Title>
                <Yakekuso />
            </SectionBlock>

            <Footer />
        </>
    );
}

export {Components};