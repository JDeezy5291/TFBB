import React from 'react'
import DumbbellsCard from '../Cards/dumbbellsCard/DumbbellsCard'

function Dumbbells() {

    return (
        <div className="dumbbells">
            <div className="app__container">
                <div className="row">
                    <div className="w-100">
                        <main className="home__main">
                            <div className="app__card-blocks">
                                {Array.from(Array(51), (e,i) => {
                                    return <DumbbellsCard />
                                })}
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dumbbells
