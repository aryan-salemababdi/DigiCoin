import React, { FC, useState } from 'react';




// CSS (Style Sheets)
import styles from "./banner.module.scss";



interface LandingProps {
    image: string;
}



const Banner: FC<LandingProps> = ({ image }) => {
    const [email, setEmail] = useState<string>("");
    const splitemail = email.split("@");
    const mystyle = {
        background: `url(${image})`,
        margin: "0px",
        height: "calc(100vh)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        transition: " all 0.2s linear",
        display: "flex",
        color: "#fff",
        listStyle: "none",
        justifyContent: "center",
        alignItems: "center",
    };
    const handleEmailChange = (event: any) => {
        const emailvalue = event.target.value;
        setEmail(emailvalue);
        return emailvalue;
    };

    return (
        <div>
            <div style={mystyle} className={styles.getEmail}>
                <input onChange={handleEmailChange} className='inputreg' type="email" value={email} name="email" placeholder='ایمیل خود را وارد کنید...' />
                <button className={splitemail.length === 2 ? styles.regbutton : styles.regbuttonoff} disabled={!(splitemail.length === 2)}><h3>ثبت</h3></button>
            </div>
        </div>
    )
}

export default Banner;