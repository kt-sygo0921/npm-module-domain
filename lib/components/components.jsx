import * as React from 'react';
import fetch from 'unfetch';
const Components = () => {
    const [response, updateResponse] = React.useState(undefined);
    React.useEffect(() => {
        (async () => {
            const res = await fetch('https://next.json-generator.com/api/json/get/4JjRSZ7Qd', { mode: 'cors' });
            const json = await res.json();
            updateResponse(json);
        })();
    }, []);
    return (<>
            {response ? (<>
                    <p>非同期通信結果</p>
                    <ul>
                    {response && response.list.map((data) => {
        return <li key={data.id}>{data.id}: {data.name}</li>;
    })}
                    </ul>
                    <p>画像テスト: <img src="https://placehold.jp/16x16.png"/></p>
                </>) : (<p>loading...</p>)}
        </>);
};
export { Components };
