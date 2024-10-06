import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header.tsx";
import "./css/App.css";
import MainContents from "./MainContents.tsx";

function App() {
    return (
        <>
            <Router>
                <div className="inner">
                    <Header />
                    <MainContents />
                </div>
            </Router>
        </>
    );
}

export default App;
