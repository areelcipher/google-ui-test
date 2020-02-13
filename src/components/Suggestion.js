import React from 'react'
import '../Suggestion.css'

class Suggestion extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const options = this.props.results.map(r => (
            <li key={r.id}>
                <span className={"clock"}><i className="far fa-clock"></i></span>
                <span className={"sug"}>{r.suggestion}</span>
                <a className={"rem"}>{r.remove}</a>
            </li>
        ))
        return(
            <div className={"suggestion"}>
                <ul>
                    {options}
                </ul>
            </div>
        )
    }

}

export default Suggestion