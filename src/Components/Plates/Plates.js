import React from 'react'
import PlatesCard from '../Cards/platesCard/PlatesCard'

function Plates() {
    return (
        <div className="plates">
            <div className="app__container">
                <div className="row">
                    <div className="w-100">
                        <main className="home__main">
                            <div className="app__card-blocks">
                                {Array.from(Array(51), (e,i) => {
                                    return <PlatesCard key={i} />
                                })}
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plates
