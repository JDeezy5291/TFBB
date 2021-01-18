import React from 'react'
import CagesCard from '../Cards/cagesCard/CagesCard'

function Cages() {
    return (
        <div className="cages">
            <div className="app__container">
                <div className="row">
                    <div className="w-100">
                        <main className="home__main">
                            <div className="app__card-blocks">
                                {Array.from(Array(51), (e,i) => {
                                    return <CagesCard key={i} />
                                })}
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cages
