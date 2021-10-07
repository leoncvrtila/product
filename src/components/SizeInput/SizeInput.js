import React from "react";

const SizeInput = (props) => {

    const selectHandler = (e) => {

        props.setSize(e.target.value)

    }

    return (

        <div className='SizeInput'>

            <span><b>Size</b></span>

            <select onChange={selectHandler}>
                <option>14</option>
                <option>28</option>
            </select>

        </div>

    )

}

export default SizeInput