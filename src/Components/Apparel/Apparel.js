import React from 'react'
import ApparelCard from '../Cards/ApparelCard'

function Apparel() {
    return (
        <div className="apparel">
            <div className="app__container">
                <div className="row">
                    <div className="w-100">
                        <main className="home__main">
                            <div className="app__card-blocks">
                                {Array.from(Array(51), (e,i) => {
                                    return <ApparelCard key={i} />
                                })}
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Apparel
