import React, { FC } from 'react'





// CSS (Style Sheets)
import styles from "./responsecard.module.scss";




const Responsecard: FC = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.textrespons}>
                    <h2>هفت روز هفته، در 24 ساعت شبانه‌روز پاسخگوی شما هستیم</h2>
                </div>
                <div className={styles.buttonrespons}>
                    <button id={styles.ContactSupportButton}>تماس با پشتیبانی</button>
                    <button id={styles.FrequentlyAskedQuestionsButton}>سوالات متداول</button>
                </div>
            </div>
        </div >
    )
}

export default Responsecard;