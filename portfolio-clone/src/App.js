import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavHeader from "./components/NavHeader";
import Services from "./components/Services";

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavHeader />
                <Services />
            </div>
        );
    }
}

export default App;
