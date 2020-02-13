import React from 'react';

class HomePageFooter extends React.Component {
    render() {
        return (
            <div className={"home-page-footer"}>
                <p className={"nigeria"}>Nigeria</p>
                <ul className={"ads"}>
                    <li><a href={"#"}>Advertising</a></li>
                    <li><a href={"#"}>Business</a></li>
                    <li><a href={"#"}>About</a></li>
                    <li><a href={"#"}>How Search works</a></li>
                </ul>
            </div>
        )
    }
}

export default HomePageFooter;