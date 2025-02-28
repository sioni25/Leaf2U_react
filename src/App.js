import './App.css';
import { Router, Route } from 'react-router-dom';
import React, { useState, useRef, useReducer, useEffect } from 'react';
import axios from 'axios';
import Button from './components/Button';

function App() {
    return (
        <div className="gray_background">
            <h2>예시 컴포넌트</h2>
            <p>src/components 폴더 밑에 컴포넌트.js 파일들 만들어서 사용하면 됩니다~</p>
            <Button
                text={'확인'}
                onClick={() => {
                    alert('!');
                }}
            />
        </div>
    );
}

export default App;
