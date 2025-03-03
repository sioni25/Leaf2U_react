import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useState, useRef, useReducer, useEffect } from 'react';
import axios from 'axios';
import Login from './page/Login';
import Home from './page/home/Home';
import Notice from './page/home/Notice';

function App() {
    return (
        <div className="w-100 h-100">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/notice" element={<Notice />} />
            </Routes>
        </div>
    );
}

export default App;
