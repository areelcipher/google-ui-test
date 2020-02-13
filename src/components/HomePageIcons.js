import React from 'react'
import '../HomePageIcons.css'

class HomePageIcons extends React.Component {
    render() {
        return (
            <div className="home-page-icons">
                <div className={"links"}>
                    <a href={"#"}>Google Search</a>
                    <a href={"/result"}>Result Page</a>
                </div>
                <div className={"languages"}>
                    <p>Google offered in:</p>
                    <ul>
                        <li><a href={"#"}>Hausa</a> </li>
                        <li><a href={"#"}>Igbo</a> </li>
                        <li><a href={"#"}>Ede Yoruba</a> </li>
                        <li><a href={"#"}>Nigerian Pidgin</a> </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default HomePageIcons;