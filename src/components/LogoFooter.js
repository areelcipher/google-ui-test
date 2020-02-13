import React from 'react'
import '../LogoFooter.css'

class LogoFooter extends React.Component {
    render() {
        return(
            <div className={"logo-footer"}>
                <div className={"logo-and-arrow"}>
                    <img src={"img/google.png"} alt={""} width={"150px"} />
                    <i className="fas fa-greater-than"></i>
                </div>

            </div>
        )
    }
}

export default LogoFooter;