import React from 'react'
import Card from '../Card/Card'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <div className="row">
                    <div className="w-100">
                        <main className="home__main">
                            <div className="home__card-blocks">

                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />

                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
