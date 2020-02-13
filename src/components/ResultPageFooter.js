import React from 'react';
import '../ResultPageFooter.css'

class ResultPageFooter extends React.Component {
    render() {
        return (
            <div className={"result-page-footer"}>
                <div className={"nigeria"}>
                    <p>Nigeria</p>
                    <p><strong>100001, Lagos</strong> - Based on your present location</p>
                </div>
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

export default ResultPageFooter;