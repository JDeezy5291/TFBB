import React, { useEffect } from 'react'
import "../Card.css"
import AOS from 'aos'
import 'aos/dist/aos.css'

function BenchesCard() {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    const homeData = require('../../../data/homeData')

    return (
        <div data-aos="fade-up" className="home__card">
            {homeData.data.map(elem => (
                <div>
                    <div className="home__cardHeader">
                        <h3 className="home__title">
                            <a href={elem.link}>{elem.title}</a>
                        </h3>
                    </div>
                    <div className="home__cardImage">
                        <a href={elem.link}><img src={elem.image} alt="cardImage"/></a>
                    </div>
                    <div className="home__cardDesc">
                        <p>{elem.desc}</p>
                    </div>
                    <div className="button">
                        <a href={elem.link}>check it out</a>
                    </div>   
                    <div className="home__price">${elem.price}</div>
                </div>
            ))}
        </div>
    )
}

export default BenchesCard
