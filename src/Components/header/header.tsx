import React from "react"
import "./header.scss"

import Logo from "../shared/logo/logo"

export default function Header () {
    return (
        <header className="header">
            <div className="header-top">
                <Logo />
                <button className="add-btn btn">&#43;ADD MOVIE</button>
            </div>
            <div className="header-body">
                <h2 className="title">FIND YOUR MOVIE</h2>
                <div className="search-group">
                    <input type="text" className="search-input" placeholder="What do you want to watch?.."/>
                    <button className="search-btn btn">SEARCH</button>
                </div>
            </div>
        </header>
    )
}
