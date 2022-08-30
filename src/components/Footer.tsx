import React, { FC } from 'react'
import { Link } from 'react-router-dom';




// CSS (Styles Sheets)
import styles from "./footer.module.scss";


// Icons
import instagram from "../img/download.svg";
import telegram from "../img/download2.svg";
import linkdin from "../img/download3.svg";
import twitter from "../img/download4.svg";

const Footer: FC = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.listContainer}>
                    <h3>درباره دیجی کوین</h3>
                    <hr />
                    <ul>
                        <li>
                            <Link to="/"><h4>درباره ما</h4></Link>
                        </li>
                        <li>
                            <Link to="/"><h4>امنیت کیف پول</h4></Link>
                        </li>
                        <li>
                            <Link to="/"><h4>قوانین و مقررات</h4></Link>
                        </li>
                        <li>
                            <Link to="/"><h4>تماس با ما</h4></Link>
                        </li>
                        <li>
                            <Link to="/"><h4><span>فرصت‌های شغلی</span></h4></Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.listContainer}>
                    <h3>امکانات و خدمات</h3>
                    <hr />
                    <ul>
                        <li>
                            <Link to="/"><h4>بازار آزمایشگاهی دیجی کوین</h4></Link>
                        </li>
                        <li>
                            <Link to="/"><h4>معرفی به دوستان</h4></Link>
                        </li>
                        <li>
                            <Link to="/"><h4>مستندات API</h4></Link>
                        </li>
                        <li>
                            <Link to="/"><h4>گزارش سال 2021</h4></Link>
                        </li>
                        <li>
                            <Link to="/"><h4>گزارش تغییرات</h4></Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.listContainer}>
                    <h3>راهنما و پشتیبانی</h3>
                    <hr />
                    <ul>
                        <li>
                            <Link to="/"><h4>سوالات متداول</h4></Link>
                        </li>
                        <li>
                            <Link to="/"><h4>احراز هویت و سطح های کاربری</h4></Link>
                        </li>
                        <li>
                            <Link to="/"><h4>قیمت ها و کارمزد ها</h4></Link>
                        </li>
                        <li>
                            <Link to="/"><h4>راهنمای امنیت حساب کاربری</h4></Link>
                        </li>
                        <li>
                            <Link to="/"><h4>دیجی کوین وبلاگ</h4></Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.socialMedia}>
                    <h3>همراه ما باشید !</h3>
                    <hr />
                    <a href='/'><img src={instagram} alt="instagram" /></a>
                    <a href='/'><img src={telegram} alt="telegram" /></a>
                    <a href='/'><img src={linkdin} alt="linkdin" /></a>
                    <a href='/'><img src={twitter} alt="twitter" /></a>
                </div>
            </div>
            <div className={styles.lincenc}>
                &copy;   طراحی شده توسط آرین سالم آبادی
            </div>
        </div>
    )
}

export default Footer;