import React, { FC, useEffect, useState } from 'react';



// CSS (Style Sheets)
import styles from "./generalinfo.module.scss";




const GeneralInfo: FC = () => {


    const [numberUserActive, setNumberUserActive] = useState<number>(0)
    const [trades, setTrades] = useState<number>(0)
    const [valueTrades, setValueTrades] = useState<number>(0);
    useEffect(() => {
        const userActive = (minimum: number, maximum: number) => {
            for (let count: number = minimum; count <= maximum; count++) {
                setTimeout(() => {
                    setNumberUserActive(count)
                }, 2000);
            }
        };
        const trades = (minimum: number, maximum: number) => {
            for (let count: number = minimum; count <= maximum; count++) {
                setTimeout(() => {
                    setTrades(count)
                }, 2000);
            }
        };
        const valueTrades = (minimum: number, maximum: number) => {
            for (let count: number = minimum; count <= maximum; count++) {
                setTimeout(() => {
                    setValueTrades(count)
                }, 2000);
            }
        };
        userActive(0, 10);
        trades(0, 300);
        valueTrades(0, 250);
    }, [])


    return (
        <div>

            <div className={styles.container}>
                <div>
                    <h2> + {valueTrades}<span> B</span></h2>
                    <h4>حجم معاملات</h4>
                </div>
                <div>
                    <h2>  + {trades} <span>M</span></h2>
                    <h4>معاملات انجام شده</h4>
                </div>
                <div>
                    <h2> + {numberUserActive} <span>M</span></h2>
                    <h4>کاربر فعال</h4>
                </div>
            </div>

        </div>
    )
}

export default GeneralInfo;