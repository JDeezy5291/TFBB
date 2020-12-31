import React, { useEffect, useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 930);

    useEffect(() => {
        window.addEventListener("resize", () => {
            const ismobile = window.innerWidth < 930;
            if (ismobile !== isMobile) setIsMobile(ismobile);
        }, false);
    }, [isMobile]);
    
    return (
        <div className="header">
            <div className="header__container">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-5">
                        <div className="d-flex align-items-center">
                            <h1 className="header__logo m-0">
                                <Link to="/">The Faceless Bodybuilder</Link>
                            </h1>
                        </div>
                    </div>
                    <div className="col-lg-9 col-7">
                        <div className="d-flex align-items-center justify-content-end">
                            {/* sidebar menu */}
                            <div className={`${toggleMenu ? "toggleMenu" : "hideMenu"}`}></div>
                            {/* menu toggle button */}
                            <button onClick={() => setToggleMenu(!toggleMenu)} className="header__icon p-0 d-block">
                                <div className="header__ham-menu">
                                    <div className="header__ham-menu-icon"></div>
                                </div>
                            </button>
                            
                            {/* menu content */}
                            <div className={`header__nav ${isMobile && toggleMenu ? "toggleMenu" : "hideMenu"}`}>
                                <div className={`header__nav ${isMobile && toggleMenu ? "header__OptionsOff" : "header__navOptions"}`}>                           
                                    <div id="header__navbar" className="header__nav d-flex justify-content-end">
                                        <ul className="header__list">
                                            <li className="header__list-item">
                                                <Link to="/barbells">
                                                    <span>Barbells</span>
                                                </Link>
                                            </li>
                                            <li className="header__list-item">
                                                <Link to="/dumbbells">
                                                    <span>Dumbbells</span>
                                                </Link>
                                            </li>
                                            <li className="header__list-item">
                                                <Link to="/cages">
                                                    <span>Cages</span>
                                                </Link>
                                            </li>
                                            <li className="header__list-item">
                                                <Link to="/benches">
                                                    <span>Benches</span>
                                                </Link>
                                            </li>
                                            <li className="header__list-item">
                                                <Link to="/plates">
                                                    <span>Plates</span>
                                                </Link>
                                            </li>
                                            <li className="header__list-item">
                                                <Link to="/categories">
                                                    <span>Other Categories</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
