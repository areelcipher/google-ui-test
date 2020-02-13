import React from 'react';
import '../Result.css'

class Result extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props)
        return(
            <div className={"result-details"}>
                <h3>Definition and Usage</h3>
                <p className={"news"}>{this.props.news}</p>
                <p className={"link"}>www.areelcipher.surge.sh>jsref>event_onfocus</p>
                <p className={"onfocus"}>onfocus Event - w3schools</p>
            </div>
        )
    }
}

export default Result;