import { useEffect, useState } from 'react';
import React from 'react'
import Slider from "react-slick";
import data from '../../data/data.json'

const SliderSlick = (props) => {

    const [imgUrl, setImgUrl] = useState('')
    const [imgId, setImgId] = useState(null)

    const windowWidth = window.innerWidth

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: windowWidth < 380 ? 3 : 4,
        slidesToScroll: 1
    }

    const imgHandler = (e, imgId, imgUrl) => {

        setImgUrl(imgUrl)

        setImgId(imgId)

    }

    useEffect(() => {

        setImgUrl('')

        setImgId(null)

    }, [props.size])

    let sliderData = []

    if (props.size === '14') {

        sliderData = [...data.slider.size14]
        
    } else {

        sliderData = [...data.slider.size28]

    }

    const mapThumbnails = sliderData.map(t => {

        return (

            <div key={t.id} onClick={(e) => imgHandler(e, t.id, t.imgUrl)} className='SliderThumbnail'>

                <img height='80px' width='80px' src={t.imgUrl} alt={t.id} />

                <h4>Image: {t.id}</h4>

            </div>

        )

    })


    return(

        <div className='Slider'>

            <div className='SliderMainImg'>

                <img src={imgUrl ? imgUrl : sliderData[1].imgUrl}/>

                <h3>Image: {imgId ? imgId : sliderData[1].id}</h3>

            </div>

            <div className='SliderThumbnails'>

                <Slider {...settings}>

                    {mapThumbnails}

                </Slider>

            </div>

        </div>

    )

}

export default SliderSlick