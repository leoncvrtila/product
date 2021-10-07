import React, { useState } from "react";
import SliderSlick from './Slider/Slider'
import ProductInfo from "./ProductInfo/ProductInfo";
import SizeInput from "./SizeInput/SizeInput";
import BuyButton from "./BuyButton/BuyButton";
import BulletList from "./ProductInfo/BulletList";

const Layout = () => {

    const [size, setSizeValue] = useState('14')

    const setSize = (size) => {

        setSizeValue(size)

    }

    return (

        <main>

            <div className='SliderWrapp'>

                <SliderSlick size={size} />

            </div>

            <div className='ProductDescWrapp'>

                <ProductInfo />

                <SizeInput setSize={setSize} />

                <BuyButton />

                <BulletList />

            </div>

        </main>

    )

}

export default Layout