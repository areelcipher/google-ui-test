import React from 'react'
import '../HomePageHeader.css'

class HomePageHeader extends React.Component {
    render() {
        return (
            <nav>
                <ul className="nav-links">
                    <li className="nav-link"><a href="#">Gmail</a></li>
                    <li className="nav-link"><a href="#">Images</a></li>
                    <li className="nav-link fath"><a href="#"><i className="fas fa-th"></i></a></li>
                    <li className="nav-link"><span className="circle">S</span></li>
                </ul>
            </nav>
        )
    }
}

export default HomePageHeader;