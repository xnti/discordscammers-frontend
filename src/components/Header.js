import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <nav className="w-100 navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="/">
                    <i className="fab fa-discord"></i> Discord Scammers</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/"><i className="fas fa-home"></i> Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/application"><i className="fas fa-code"></i> API</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/donate"><i className="fas fa-dollar-sign"></i> Donate</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/aboutus"><i className="fas fa-info-circle"></i> About us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;