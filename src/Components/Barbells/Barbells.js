import React from 'react'
import Card from '../Cards/barbellCard/barbellCard'
import './Barbells.css'

function Barbells() {
    return (
        <div className="barbells">
            <div className="app__container">
                <div className="row">
                    <div className="w-100">
                        <main className="home__main">
                            <div className="app__card-blocks">
                                {Array.from(Array(51), (e,i) => {
                                    return <Card key={i} />
                                })}
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Barbells
