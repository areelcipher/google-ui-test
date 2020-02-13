import React from 'react';
import '../HomePageSearch.css'
import Suggestion from "./Suggestion";
import mockData from './mockData'

class HomePageSearch extends React.Component {
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
        return (
            <div className="home-page-search">
                <div className={"google-logo"}>
                    <img src={"/img/good.png"} alt="" width={"280px"}/>
                </div>
                <div className={"search-input"}>
                    <i className="fas fa-search"></i>
                    <input type={"text"} placeholder={"Search Google or type URL"} ref={input => this.search = input} onChange={this.handleInputChange} onFocus={this.getInfo} onBlur={this.noInfo} />
                    <img src={"/img/mic.png"} alt={""} width={"15px"} />
                </div>
                <Suggestion results={this.state.results}  />
            </div>
        )
    }
}

export default HomePageSearch;