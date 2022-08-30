import React, { FC } from 'react'
import { Link } from 'react-router-dom';

// CSS (Style Sheets)
import styles from "./withus.module.scss";



// Images 
import helpToBuy from "../img/download5.webp";
import videoEdu from "../img/download6.webp";
import digiCoinBlog from "../img/download7.webp";
import FrequentlyAskedQuestions from "../img/download8.webp";

const WithUs: FC = () => {
    return (
        <div>

            <div className={styles.textWithUs}>
                <h2>همراه با دیجی  <span>کوین</span> بیشتر یاد بگیرید </h2>
            </div>
            <div className={styles.container}>
                <div>
                    <Link to="/">
                        <div className={styles.parentImg}>
                            <div className={styles.ChildImg}>
                                <img src={helpToBuy} alt="helpToBuy" />
                            </div>
                        </div>
                        <h3>راهنمای خرید ارز دیجیتال</h3>
                    </Link>
                </div>
                <div>
                    <Link to="/">
                        <div className={styles.parentImg}>
                            <div className={styles.ChildImg}>
                                <img src={videoEdu} alt="videoEdu" />
                            </div>
                        </div>
                        <h3>ویدیو های آموزشی</h3>
                    </Link>
                </div>
                <div>
                    <Link to="/">
                        <div className={styles.parentImg}>
                            <div className={styles.ChildImg}>
                                <img src={digiCoinBlog} alt="digiCoinBlog" />
                            </div>
                        </div>
                        <h3>دیجی کوین بلاگ</h3>
                    </Link>
                </div>
                <div>
                    <Link to="/">
                        <div className={styles.parentImg}>
                            <div className={styles.ChildImg}>
                                <img src={FrequentlyAskedQuestions} alt="FrequentlyAskedQuestions" />
                            </div>
                        </div>
                        <h3>سوالات متداول</h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default WithUs;