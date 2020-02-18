import * as React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
    background: #666;
`;

const NavList = styled.ul`
    display: flex;
    list-style-type: none;
    height: 100%;
    & li {
        padding: 0 20px 0 0;
    }
    & a {
        padding: 15px 0 0 0;
        display: block;
        height: 100%;
        color: #fff;
        text-decoration: none;
    }
    & a:hover {
        text-decoration: underline;
    }
`;

const SearchInput = styled.input`
    width: 180px;
    margin-top: 13px;
    background: #fff;
    padding: 5px;
    height: 30px;
    color: #333;
    border-radius: 5px;
`;

const SearchButton = styled.button`
    color: #fff;
    margin-top: 15px;
`;

const SubWrap = styled.div`
    position: relative;
`;

const ResultWrap = styled.div`
    background: #efefef;
    border: 1px solid #ccc;
    position: absolute;
    top: 43px;
    left: 0;
    min-width: 180px;
    & ul {
        list-style-type: none;
    }
    & a {
        color: #333;
        text-decoration: none;
        display: block;
        padding: 5px;
        cursor: pointer;
    }
    & a:hover {
        opacity: 0.8;
    }
`;

interface ISearchResult {
    status: string;
    list: {
        id: number;
        name: string;
        href: string;
    }[]
}

const Header: React.FC = () => {
    const inputRef = React.createRef<HTMLInputElement>();
    const [searchList, updateSearchList] = React.useState<ISearchResult | undefined>(undefined);

    const getSearchList = async (e): Promise<void> => {
        const value = e.target.value;
        const result = await fetch('https://next.json-generator.com/api/json/get/VJCtJUNmu', {method: 'post', mode: 'cors', body: value});
        const json = await result.json();
        updateSearchList(json);
    }

    const flushResult = () => {
        updateSearchList(void 0);
    }

    const onClickList = (e, href) => {
        console.log(inputRef)
        e.preventDefault();
        if(inputRef && inputRef.current) {
            console.log("aaa")
            inputRef.current.value = href;
        }
        flushResult();
    }

    React.useEffect(() => {
        const onClickDocument = () => {
            flushResult();
        }
        document.addEventListener('click', onClickDocument);

        return () => {
            document.removeEventListener('click', onClickDocument);
        }
    }, [])

    return (
        <Wrapper>
            <div>
                <NavList>
                    <li><a href="#">リンク1</a></li>
                    <li><a href="#">リンク2</a></li>
                    <li><a href="#">リンク3</a></li>
                </NavList>
            </div>
            <SubWrap>
                <form method="get" action="/" autoComplete="off">
                    <NavList>
                        <li><SearchInput onInput={getSearchList} ref={inputRef} type="text" placeholder="enter..." name="searchText" /></li>
                        <li><SearchButton>検索</SearchButton></li>
                    </NavList>
                </form>
                {searchList && searchList.status && (
                    <ResultWrap>
                        <ul>
                            {searchList.list.map((data => {
                                return (
                                    <li key={data.id}><a onClick={(e) => onClickList(e, data.href)}>{data.name}</a></li>
                                )
                            }))}
                        </ul>
                    </ResultWrap>
                )}
            </SubWrap>
        </Wrapper>
    );
}

export default Header;