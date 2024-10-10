import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header.tsx";
import MainContents from "./MainContents.tsx";
import "./css/App.css";

function App() {
    return (
        <Router basename="/frontend_mentor13/">
            <div className="inner">
                <Header />
                <MainContents />
            </div>
        </Router>
    );
}

export default App;
