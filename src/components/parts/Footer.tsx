import * as React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
    padding: 10px 50px;
    background: #666;
`;

const NavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const NavList = styled.ul`
    list-style-type: none;
    & > li {
        position: relative;
        padding-left: 20px;
    }
    & > li:before {
        position: absolute;
        top: 50%;
        left: 0;
        width: 4px;
        height: 4px;
        background: #fff;
        border-radius: 4px;
        content: "";
    }
    & a {
        color: #fff;
        text-decoration: none;
    }
    & a:hover {
        text-decoration: underline;
    }
`;

const CopyRight = styled.p`
    color: #fff;
    text-align: center;
    font-size: 12px;
    background: #000;
`;

const Footer: React.FC = () => {

    return (
        <>
            <Wrapper>
                <NavWrapper>
                    <NavList>
                        <li><a href="#">aaaaaa</a></li>
                        <li><a href="#">aaaaaa</a></li>
                        <li><a href="#">aaaaaa</a></li>
                        <li><a href="#">aaaaaa</a></li>
                    </NavList>
                    <NavList>
                        <li><a href="#">aaaaaa</a></li>
                        <li><a href="#">aaaaaa</a></li>
                        <li><a href="#">aaaaaa</a></li>
                        <li><a href="#">aaaaaa</a></li>
                    </NavList>
                    <NavList>
                        <li><a href="#">aaaaaa</a></li>
                        <li><a href="#">aaaaaa</a></li>
                        <li><a href="#">aaaaaa</a></li>
                        <li><a href="#">aaaaaa</a></li>
                    </NavList>
                </NavWrapper>
            </Wrapper>
            <CopyRight>ほげほげ</CopyRight>
        </>
    );
}

export default Footer;