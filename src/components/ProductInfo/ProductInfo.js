import React from "react";
import data from '../../data/data.json'

const ProductInfo = () => {

    return (

        <div className='ProductInfo'>

            <h1>Lorem ipsum</h1>

            <p>
                {data.desc}
            </p>

        </div>

    )

}

export default ProductInfo