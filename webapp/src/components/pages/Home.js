import React from 'react';
import { css } from '@emotion/core';

const styles = css`
// display:flex;
// flex-direction: column;
// *{
//     border: solid 1px black;
// }
background-color: #f6f4e9;
h1{
    height: 100%
    font-family: TiemposFineWeb-Medium;
    font-size: 6rem;
    text-shadow: -1px 0 white, 0 3px white, 1px 0 white, 0 -1px white;
    background-image: url("https://thumbs.dreamstime.com/b/credit-card-black-green-gray-wooden-background-finance-contactless-payment-credit-card-black-green-gray-170193060.jpg");
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat
}
p{
    display:flex;
    align-items:center;
    justify-content: center;
    font-family: 'Open Sans', sans-serif;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1.5rem;
    padding: 2%;

}
`

const Home = () => {
    return (
        <div>
        <div className='home' css={styles}>
            <h1>Welcome To<br></br> Transaction Tracker</h1>
            <p>soihfwshfh ewwefie ewhfiu hewuhf uh ewuifh ehwhf fh uiwhcui<br>
            </br>uiwnuihweuifhuinc weuiciew ic nuihc uw eopwkfk kefwpok keo<br>
            </br>iwjhejhciuh ewuichui weh cueh wuchewhuih efkljeklj jeowjf l<br>
            </br>soihfwshfh ewwefie ewhfiu hewuhf uh ewuifh ehwhf fh uiwhcui<br>
            </br>uiwnuihweuifhuinc weuiciew ic nuihc uw eopwkfk kefwpok keo<br>
            </br>iwjhejhciuh ewuichui weh cueh wuchewhuih efkljeklj jeowjf l
            </p>
            <p>soihfwshfh ewwefie ewhfiu hewuhf uh ewuifh ehwhf fh uiwhcui<br>
            </br>uiwnuihweuifhuinc weuiciew ic nuihc uw eopwkfk kefwpok keo<br>
            </br>iwjhejhciuh ewuichui weh cueh wuchewhuih efkljeklj jeowjf l<br>
            </br>soihfwshfh ewwefie ewhfiu hewuhf uh ewuifh ehwhf fh uiwhcui<br>
            </br>uiwnuihweuifhuinc weuiciew ic nuihc uw eopwkfk kefwpok keo<br>
            </br>iwjhejhciuh ewuichui weh cueh wuchewhuih efkljeklj jeowjf l</p>
        </div>
        </div>
    )
}

export default Home
