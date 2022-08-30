import React, { FC, Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


// Components
import Coin from './shared/Coin';
import Loader from './shared/Loader';


// CSS (Style Sheets)
import styles from "./currency.module.scss";


// API
import { getCoin } from '../services/api';






interface ICurrencyProps {
    numberCurrency: number;
}
const Currency: FC<ICurrencyProps> = ({ numberCurrency }) => {
    const [coin, setCoin] = useState<any[]>([]);
    const [search, setSearch] = useState<string>("");
    const navigate = useNavigate();
    const addres: string = window.location.href;
    const addresSplited: any[] = addres.split("/");
    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoin(numberCurrency);
            setCoin(data);
        };
        fetchAPI();
    });
    const cheangHandler = (event: any) => {
        setSearch(event.target.value)
    }
    const searchedCoin = coin.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));
    return (
        <div>
            <div className={styles.container}>
                <input style={addresSplited[3] !== "store" ? {display:"none"} : {display:"block"}} type="text" placeholder="نام رمز ارز مورد نظر خورد را وارد کنید" value={search} onChange={cheangHandler} />
                {
                    coin.length ?
                <Fragment>
                    {searchedCoin.map(coin => <Coin
                        key={coin.id}
                        name={coin.name}
                        image={coin.image}
                        symbol={coin.symbol}
                        price={coin.current_price}
                        marketCap={coin.market_cap}
                        priceChange={coin.price_change_percentage_24h}
                    />)}
                </Fragment>
                :
                <Loader />
}
            </div>
            <div style={ addresSplited[3] === "store" ? { display: "none", justifyContent: "center", margin: "-20px 0px", zIndex: "10000px" } :{ display: "flex", justifyContent: "center", margin: "-15px 0px", zIndex: "10000px" }}>
                <button onClick={() => navigate("/store")} className={styles.buttonStor}>نمایش همه بازار ها</button>
            </div>
        </div>
    )
}

export default Currency;