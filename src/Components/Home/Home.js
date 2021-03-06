import React from 'react'
import HomeCard from '../Cards/homeCard/HomeCard'

function Home() {    
        return (
            <div className="home">
                <div className="app__container">
                    <div className="row">
                        <div className="w-100">
                            <main className="home__main">
                                <div className="app__card-blocks">
                                    {Array.from(Array(51), (e,i) => {
                                        return <HomeCard key={i}
                                        
                                        />
                                    })}
                                    {/* <Card /> */}
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Home
