import React from "react";
import data from '../../data/data.json'

const BulletList = () => {

    const mapList = data.bulletList.map(i => {

        return <li key={i.id}>{i.text}</li>

    })

    return (

        <div className='BulletList'>

            <ul>

                {mapList}

            </ul>

        </div>

    )

}

export default BulletList