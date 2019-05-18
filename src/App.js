import React, { Component, Fragment } from "react";

import "./App.css";
import TrackerBuilder from "./container/TrackerBuilder/TrackerBuilder";

class App extends Component {
    render() {
        return (
            <Fragment>
                <TrackerBuilder />
            </Fragment>
        );
    }
}

export default App;
