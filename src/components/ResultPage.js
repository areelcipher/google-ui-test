import React from 'react';
import ResultPageHeader from './ResultPageHeader'
import ResultPageBody from './ResultPageBody'
import ResultPageFooter from "./ResultPageFooter";
import '../index.css'
import LogoFooter from "./LogoFooter";

class ResultPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="result-page">
                <ResultPageHeader />
                <ResultPageBody />
                <ResultPageBody />
                <LogoFooter />
                <ResultPageFooter />
            </div>
        )
    }
}

export default ResultPage;