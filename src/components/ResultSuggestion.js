import React from 'react'
import '../ResultSuggestion.css'

class ResultSuggestion extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const options = this.props.results.map(r => (
            <li key={r.id}>
                <span className={"clock"}><i className="fas fa-search"></i></span>
                <span className={"sug"}>{r.suggestion}</span>
                <a className={"rem"}>{r.remove}</a>
            </li>
        ))
        return(
            <div className={"result-suggestion"}>
                <ul>
                    {options}
                </ul>
            </div>
        )
    }

}

export default ResultSuggestion;