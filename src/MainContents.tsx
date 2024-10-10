import React from "react";
import { Routes, Route } from "react-router-dom";
import Collections from "./pages/Collections.tsx";
import "./css/MainContents.css";

export default function MainContents() {
    return (
        <main className="main-contents">
            <Routes>
                <Route path="/" element={<div className="no-contents">NO CONTENTS</div>} />
                <Route path="/collections" element={<Collections />} />
            </Routes>
        </main>
    );
}
