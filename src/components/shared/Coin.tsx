import React, { FC } from 'react'
import { Link } from 'react-router-dom';



import styles from "./coin.module.scss";

interface Currency {
    name: string;
    image: string;
    symbol: string;
    price: number;
    marketCap: number;
    priceChange: number;
}


const Coin: FC<Currency> = ({ name, image, symbol, price, marketCap, priceChange }) => {
    return (
        <div className={styles.containerCard}>
            <Link to="/">
                <picture>
                    <img src={image} alt={name} width="50px" />
                </picture>
            </Link>
            <span className={styles.name} ><Link to="/">{name}</Link></span>
            <span className={styles.symbol}><Link to="/">{symbol.toUpperCase()}</Link></span>
            <span className={styles.currentPrice} >$ {price.toLocaleString()}</span>
            <span className={priceChange > 0 ? styles.greenPriceChange : styles.redPriceChange}>{priceChange.toFixed(2)} %</span>
            <div className={styles.marketCap}>
                <span style={{ marginRight: "30px" }}>حجم تغییرات</span>
                <br />
                <span className={styles.marketCap} >$ {marketCap.toLocaleString()}</span>
            </div>
        </div>
    )
}

export default Coin