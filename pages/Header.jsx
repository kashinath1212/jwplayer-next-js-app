import React from 'react'
import { Anchor, Button } from './api/StyledComponents'

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light mx-4 ">
            <a className="navbar-brand text-white" style={{fontWeight: 'bolder', fontSize: 28, }} href="#">JWP</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto mx-3">
                    <li className="nav-item active">
                        <Anchor active className="nav-link" href="#">Home</Anchor>
                    </li>
                    <li className="nav-item">
                        <Anchor className="nav-link" href="#">Film</Anchor>
                    </li>
                    <li className="nav-item">
                        <Anchor className="nav-link" href="#">Courses</Anchor>
                    </li>
                    <li className="nav-item">
                        <Anchor className="nav-link" href="#">Live</Anchor>
                    </li>
                </ul>
                <form className="d-flex my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <Button type="submit">Search</Button>
                </form>
            </div>
        </nav>
    )
}

export default Header