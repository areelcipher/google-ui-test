import React from 'react'
import '../ResultPageHeader.css'
import mockData from "./mockData";
import ResultSuggestion from "./ResultSuggestion";

class ResultPageHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query: '',
            results: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.getInfo = this.getInfo.bind(this);
        this.noInfo = this.noInfo.bind(this)
    }

    getInfo = () => {
        this.setState({
            results: mockData
        })
    }
    noInfo = () => {
        this.setState({
            results: []
        })
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        }, () => {
            if (this.state.query && this.state.query.length > 1) {
                if (this.state.query.length % 2 === 0) {
                    this.getInfo()
                }
            } else if (!this.state.query) {
            }
        })
    }

    render() {
        return(
            <div className={"result-page-header"}>
                <div className={"logo-search-user"}>
                    <div className={"logo"}>
                        <img src={"/img/google.png"} alt={""} width={"100px"} />
                    </div>
                    <div className={"search"}>
                        <input type="text"  placeholder={"what is the opposite of onFocus event in react"} ref={input => this.search = input} onChange={this.handleInputChange} onFocus={this.getInfo} onBlur={this.noInfo} />
                        <img src={"/img/mic.png"} alt={""} width={"15px"} />
                        <i className="fas fa-search"></i>
                    </div>
                    <ResultSuggestion results={this.state.results}  />
                    <div className={"user"}>
                        <a className={"th"} href="#"><i className="fas fa-th"></i></a>
                        <span className={"circle"}><a>S</a></span>
                    </div>
                </div>
                <div className={"navs"}>
                    <ul className={"nav-links"}>
                        <li className={"nav-link"}>
                            <a className={"gmail"} href={"#"}>
                                <i className={"fas fa-search"}></i>
                                All
                            </a>
                        </li>
                        <li className={"nav-link"}>
                            <a className={"gmail"} href={"#"}>
                                <i className="fab fa-youtube"></i>
                                Videos
                            </a>
                        </li>
                        <li className={"nav-link"}>
                            <a href={"#"}>
                                <i className="far fa-image"></i>
                                Images
                            </a>
                        </li>
                        <li className={"nav-link"}>
                            <a href={"#"}>
                                <i className="fas fa-map-marker-alt"></i>
                                Maps
                            </a>
                        </li>
                        <li className={"nav-link"}>
                            <a href={"#"}>
                                <i className="far fa-newspaper"></i>
                                News
                            </a>
                        </li>
                        <li className={"nav-link"}>
                            <a href={"#"}>
                                <i className="fas fa-ellipsis-v"></i>
                                More
                            </a>
                        </li>
                        <li className={"settings"}>
                            <a href={"#"}>
                                Settings
                            </a>
                        </li>
                        <li className={"tools"}>
                            <a className={"gmail"} href={"#"}>
                                Tools
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ResultPageHeader;