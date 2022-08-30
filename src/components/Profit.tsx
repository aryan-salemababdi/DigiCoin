import React, { FC } from 'react'


// CSS (Style Sheets)
import styles from "./profit.module.scss";


// Images
import profit from "../img/profit-img.24cafd2.webp";



const Profit: FC = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.profitImg}>
                    <img src={profit} alt="profit" />
                </div>
                <div className={styles.profitText}>
                    <div>
                        <h2>در سود دیجی  <span>کوین</span> سهیم باشید </h2>
                        <br />
                        <p>با دعوت از دوستانتان با لینک اختصاصی خود، هر بار که معامله می‌کنند برای همیشه تا 30% از کارمزد معاملاتشان از طرف دیجی کوین به شما تعلق می‌گیرد</p>
                        <button>بیشتر بدانید</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profit;