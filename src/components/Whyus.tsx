import React, { FC } from 'react'



// CSS (Style Sheets)
import styles from "./whyus.module.scss";


// Images
import Easy_Practical from "../img/why1.fe46a70.webp";
import safeBuy from "../img/why2.76a5171.webp";
import fastBuy from "../img/why3.1ed2508.webp";

const Whyus:FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.whyUstext}>
                <h2>چرا دیجی  <span>کوین</span> را انتخاب کنیم <span>؟</span></h2>
            </div>
            <div className={styles.cardBox}>
                <div className={styles.Easy_Practical}>
                    <div>
                        <img src={Easy_Practical} alt={"Easy_Practical"} width="100px" height="100px" />
                    </div>
                    <h3>آسان و کاربردی</h3>
                    <p>محیط ساده و کاربردی دیجی کوین، معامله ارزدیجیتال را برای شما لذت بخش خواهد کرد.</p>
                </div>
                <div className={styles.safeBuy}>
                    <div>
                        <img src={safeBuy} alt={"safeBuy"} width="100px" height="100px" />
                    </div>
                    <h3>خرید و فروش امن</h3>
                    <p>اولویت دیجی کوین امنیت است. با خیالی آسوده و بدون نگرانی خرید و فروش کنید.</p>
                </div>
                <div className={styles.fastBuy}>
                    <div>
                        <img src={fastBuy} alt={"fastBuy"} width="100px" height="100px" />
                    </div>
                    <h3>پیشرو و سریع</h3>
                    <p>تنوع رمزارزها و سرعت معاملات، دیجی کوین را جزو بهترین بازارهای آنلاین قرار داده است.</p>
                </div>
            </div>
        </div>
    )
}

export default Whyus;