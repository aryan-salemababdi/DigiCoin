import React, { FC } from "react";

// Components
import Banner from "./shared/Banner";
import landingimage from "../img/guerrillabuzz-crypto-pr-Xw5c0O-xGII-unsplash.jpg";
import Currency from "./Currency";
import Whyus from "./Whyus";
import Facilities from "./Facilities";
import GeneralInfo from "./GeneralInfo";
import WithUs from "./WithUs";
import Navbar from "./Navbar";
import Profit from "./Profit";
import Responsecard from "./Responsecard"
import Footer from "./Footer";



const Landing: FC = () => {
  return (
    <div>
      <Navbar />
      <Banner image={landingimage} />
      <Currency  numberCurrency={6} />
      <Whyus />
      <Facilities />
      <GeneralInfo />
      <WithUs />
      <Profit />
      <Responsecard />
      <Footer />
    </div>
  )
}

export default Landing;