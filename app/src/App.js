import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/Header/Header';
import Home from "./pages/Home/Home";
import Footer from './components/Footer/Footer';

import "./App.css";

export default function App() {
    return (
        <div className='App'>
            <Router>
                <Header />

                <Routes>
                    <Route exact path='/' element={<Home />} />
                </Routes>

                <Footer />
            </Router>
        </div>
    )
}