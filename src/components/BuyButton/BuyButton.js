import React from "react";

const BuyButton = () => {

    const btnHandler = () => {

        alert('Buy button')

    }

    return (

        <div className='BuyButton'>

            <button onClick={btnHandler}>Buy Now</button>

        </div>

    )

}

export default BuyButton