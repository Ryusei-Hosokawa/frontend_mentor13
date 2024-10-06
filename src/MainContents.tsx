import React from "react";
import "./css/MainContents.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Collections from "./pages/Collections.tsx";
import Men from "./pages/Men.tsx";
import Women from "./pages/Women.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";

export default function MainContents() {
    return (
        <main className="main-contents">
            <Routes>
                <Route path="/collections" element={<Collections />} />
                <Route path="" element={<Men />} />
                <Route path="" element={<Women />} />
                <Route path="" element={<About />} />
                <Route path="" element={<Contact />} />
            </Routes>
        </main>
    );
}
