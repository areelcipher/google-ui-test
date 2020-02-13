import React from 'react';
import '../ResultTwo.css'

class ResultTwo extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className={"result-two-details"}>
                <p className={"link"}>www.areelcipher.surge.sh>jsref>event_onfocus</p>
                <h3>Definition and Usage</h3>
                <p className={"news"}>{this.props.news}</p>
                <p className={"onfocus"}>onfocus Event - w3schools</p>
            </div>
        )
    }
}

export default ResultTwo;