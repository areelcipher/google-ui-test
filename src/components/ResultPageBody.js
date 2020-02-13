import React from 'react';
import '../ResultPageBody.css'
import Result from "./Result";
import ResultTwo from "./ResultTwo";

class ResultPageBody extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            news: "The Lord is good all the time. I am nothing without you Lord. I thank you for everything you have done in my life. The Lord is good all the time. I am nothing without you Lord. I thank you for everything you have done in my life. The Lord is good all the time. I am nothing without you Lord. I thank you for everything you have done in my life",
            id: 1
        }
    }
    render() {
        console.log(this.props)
        return(
            <div className={"result-page-body"}>
                <div className={"result"}>
                    <h3 className={"detail"}>About 70,900 results (0.58 seconds)</h3>
                    <Result news={this.state.news} />
                    <ResultTwo news={this.state.news} />
                </div>
            </div>
        )
    }
}

export default ResultPageBody;