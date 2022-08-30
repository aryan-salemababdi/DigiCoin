import React, { FC } from 'react'


// Components
import Navbar from './Navbar';
import Currency from './Currency';
import Banner from './shared/Banner';



// Images
import storeimage from "../img/jeremy-bezanger-cD5qFAlSk_E-unsplash.jpg"
import Footer from './Footer';




const Store:FC = () => {
  return (
    <div>
        <Navbar />
        <Banner image={storeimage}/>
        <Currency  numberCurrency = {100} />
        <Footer />
    </div>
  )
}

export default Store;