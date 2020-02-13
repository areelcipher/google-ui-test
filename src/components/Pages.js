import React from 'react';
import '../Pages.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from "./HomePage";
import ResultPage from "./ResultPage";

class Pages extends React.Component {

    render() {
        return (
            <Router>
                <div className="pages">
                    <Switch>
                        <Route path='/' exact component={HomePage} />
                        <Route path='/result' exact component={ResultPage} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Pages;