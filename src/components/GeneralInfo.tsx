import React, { FC, useEffect, useState } from 'react';



// CSS (Style Sheets)
import styles from "./generalinfo.module.scss";




const GeneralInfo: FC = () => {


    const [numberUserActive, setNumberUserActive] = useState<number>(0)
    const [trades, setTrades] = useState<number>(0)
    const [valueTrades, setValueTrades] = useState<number>(0);
    let counter: number = 0;
    useEffect(() => {
        const intervalid = setInterval(() => {
            counter += 1
            counter <= 4 ?  setNumberUserActive(counter) :  setNumberUserActive(9);
            counter <= 200 ?  setTrades(counter) :  setTrades(200);
            counter <= 200 ?  setValueTrades(counter) :  setValueTrades(200);
        },30);
        return () => clearTimeout(intervalid)
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
