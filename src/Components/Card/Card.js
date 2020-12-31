import React from 'react'
import "./Card.css"

function Card() {
    return (
        <div className="home__card">
            <div className="home__cardHeader">
                <h3 className="home__title">
                    <a href="#">Item Here</a>
                </h3>
            </div>
            <div className="home__cardImage">
                <a href="#"><img src="https://demo.99colorthemes.com/aspro/wp-content/uploads/2020/05/StockSnap_TQ30QBDKB4-scaled.jpg" alt="img_1"/></a>
            </div>
            <div className="home__cardDesc">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis rem quia magnam nesciunt similique adipisci et, perferendis esse ab dolorum voluptatibus ullam numquam reiciendis corrupti ad optio corporis, vero praesentium?</p>
            </div>
            <div className="button">
                <a href="#">check it out</a>
            </div>
        <div className="home__price">$700</div>
    </div>
    )
}

export default Card
