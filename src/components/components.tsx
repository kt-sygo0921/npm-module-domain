import * as React from 'react';
import fetch from 'unfetch';
import {Domain1} from '@kt-sygo0921/npm-module-domain';
import Spinner from './Spinner';

interface IResponse {
    status: string;
    title: string;
    list: {
        id: number;
        name: string;
    }[]
}

const Components: React.FC = () => {
    const [response, updateResponse] = React.useState<IResponse | undefined>(undefined);
    React.useEffect( () => {
        (async () => {
            const res = await fetch('https://next.json-generator.com/api/json/get/4JjRSZ7Qd', {mode: 'cors'});
            const json = await res.json();
            updateResponse(json);
        })();
    }, [])
    return (
        <>
            <h1>表示てすと</h1>
            <h2>非同期通信</h2>
            {response ? (
                <>
                    <p>非同期通信結果</p>
                    <ul>
                    {
                        response && response.list.map((data) => {
                            return <li key={data.id}>{data.id}: {data.name}</li>
                        })
                    }
                    </ul>
                    <p>画像テスト: <img src="https://placehold.jp/16x16.png" /></p>
                </>
            ) : (
                <p>loading...</p>
            )}
            <div>
                <h2>他のドメインのコンポーネントをimportして配置</h2>
                <Domain1 />
            </div>
        </>
    );
}

export {Components};