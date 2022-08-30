import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';


//  CSS (Style Sheets)
import styled from "styled-components";
import styles from "./navbar.module.scss";


// Icons
import arrow from "../icons/pngwing.com.png";
import { scrolltoTop } from '../helper/functions';



const Div = styled.div`
width : 2rem;
height : 2rem;
z-index : 20;
display : none;
float:left;
cursor : pointer;
@media ( max-width: 943px) {
    display:flex;
    justify-content : space-around;
    flex-direction : column;
}
div{
    width:2rem;
    height : 0.25rem;
    background : #1a73e8;
    margin-right:10px;
    border-radius : 10px;
}
`


const Navbar = () => {
    const [scroll, setScroll] = useState(false);
    const [open, setOpen] = useState(false);
    const btnref = useRef()
    const valscroll = () => {
        const scrollvalue = document.documentElement.scrollTop;
        scrollvalue > 10 ? setScroll(true) : setScroll(false);
    }
    window.addEventListener("scroll", valscroll);
    useEffect(() => {
        const closenavbarsmall = (e) => {
            const setOpenbar = e.path[2] !== btnref.current ? setOpen(false) : null;
            return setOpenbar
        };
        document.body.addEventListener("click", closenavbarsmall);
        return () => document.body.addEventListener("click", closenavbarsmall);
    }, [])

    return (
        <div>
            <header className={scroll ? styles.headertwo : styles.header}>
                <div className={scroll ? styles.listcountinertwo : styles.listcountiner}>
                    <button ref={btnref} style={{ background: "none", border: "none", marginTop: "10px" }} open={open} onClick={() => setOpen(prev => !prev)}>
                        <Div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </Div>
                    </button>
                    <div className={open ? styles.navbarsmallopen : styles.navbarsmall}>
                        <ul className={styles.list}>
                            <li>
                                <div className={styles.logo}>
                                    <Link style={{ textDecoration: "none" }} to="/"><h1> دیجی  <span>کوین</span> <span style={{display:"none"}} > | </span></h1></Link>
                                </div>
                            </li>
                            <li><Link to="/landing">معرفی به دوستان </Link></li>
                            <li><Link to="/products"> راهنمای استفاده </Link> </li>
                            <li><Link to="/aboutus"> سوالی دارید؟ </Link></li>
                            <li className={open ? styles.divisionremove : styles.divisionadd}>
                                <Link to="/division"> لیست قیمت رمز ارز ها  <span style={{fill:"#fff"}}> <img src={arrow} width="12.5" alt="downIcon" /> </span></Link>
                                <ul style={{ padding: "10px 0px" }} className={styles.division}>
                                    <li><Link to="/"> بیت کوین</Link></li>
                                    <hr />
                                    <li><Link to="/"> اتریوم </Link></li>
                                    <hr />
                                    <li><Link to="/"> تتر </Link></li>
                                    <hr />
                                    <li><Link to="/store"> سایر ارز های دیجیتال </Link></li>
                                </ul>
                            </li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.signin_login}>
                    <div className={styles.signin}>
                        <Link to="/signin"> ثبت نام </Link>
                    </div>
                    <span style={scroll ? {color:"black",fontSize:"2rem"}: {color:"#fff",fontSize:"2rem"} }> | </span>
                    <div className={styles.login}>
                        <Link to="/login"> ورود </Link>
                    </div>
                </div>
            </header>
            <div className={styles.backToUp} style={!scroll?{display:"none"}:{display:"block"}}>
                <button><img src={arrow} onClick={scrolltoTop} alt="upicon" width="20"  /></button>
            </div>
            <div className={styles.support}>
                <button><h3>پشتیبانی دیجی کوین</h3></button>
            </div>
        </div>
    )
}
export default Navbar;
