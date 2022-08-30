import React, { FC } from 'react'


// CSS(Style Sheets
import styles from "./facilities.module.scss";



// Images
import facilitiesImg from "../img/app-screenshot.743295f.webp";
import WalletManagement from "../img/download.webp";
import  payment from "../img/download2.webp";
import safeWallet from "../img/download3.webp";
import competitiveFee from "../img/download4.webp";




const Facilities: FC = () => {
    return (
        <div>
            <div className={styles.facilitiesText}>
                <h2>بهترین امکانات خرید و فروش ارزهای دیجیتال</h2>
            </div>
            <div className={styles.container}>
                <div className={styles.facilitiesImg}>
                    <img src={facilitiesImg} alt="facilitiesImg" />
                </div>
                <div className={styles.descriptionFacilities}>
                    <div className={styles.disc}>
                        <div className={styles.discCardImg}>
                            <img src={WalletManagement} alt="Wallet management" />
                        </div>
                        <div style={{marginRight:"10px"}}>
                            <h2>مدیریت موجودی کیف پول</h2>
                            <p style={{width:"80%"}}>رمزارزهای دیجیتال محبوب را خرید و فروش کنید و در یکجا وضعیت موجودی خود را دنبال کنید</p>
                        </div>
                    </div>
                    <div className={styles.disc}>
                        <div className={styles.discCardImg}>
                            <img src={payment} alt="payment" />
                        </div>
                        <div style={{marginRight:"10px"}}>
                            <h2>پرداخت با کارت‌های شتاب</h2>
                            <p style={{width:"80%"}}>معامله انواع رمزارز با تومان از طریق واریز و برداشت با کارت‌های بانکی عضو شتاب</p>
                        </div>
                    </div>
                    <div className={styles.disc}>
                        <div className={styles.discCardImg}>
                            <img src={safeWallet} alt="safeWallet" />
                        </div>
                        <div style={{marginRight:"10px"}}>
                            <h2>کیف پول امن</h2>
                            <p style={{width:"80%"}}>رمز اختصاصی کیف پول شما به صورت آفلاین نگهداری می شود و در برابر هک ایمن خواهد بود</p>
                        </div>
                    </div>
                    <div className={styles.disc}>
                        <div className={styles.discCardImg}>
                            <img src={competitiveFee} alt="competitiveFee" />
                        </div>
                        <div style={{marginRight:"10px"}}>
                            <h2>کارمزد رقابتی</h2>
                            <p style={{width:"80%"}}>رمزارزهای دیجیتال محبوب را خرید و فروش کنید و در یکجا وضعیت موجودی خود را دنبال کنید</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Facilities;