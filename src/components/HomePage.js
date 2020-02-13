import React from 'react';
import HomePageHeader from "./HomePageHeader";
import HomePageSearch from "./HomePageSearch";
import HomePageIcons from "./HomePageIcons";
import HomePageFooter from "./HomePageFooter";
import '../HomePageFooter.css'
import '../index.css'

class HomePage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="home-page">
                <HomePageHeader />
                <HomePageSearch />
                <HomePageIcons />
                <HomePageFooter />
            </div>
        )
    }
}

export default HomePage;