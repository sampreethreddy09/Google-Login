import React from 'react';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useGlobalContext } from './components/Context'; 

function App() {
    const { isValid } = useGlobalContext();
    // localStorage.clear();
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                {isValid && <Route path="/home" element={<Home />} />}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
