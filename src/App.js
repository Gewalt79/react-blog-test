import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import MainPage from './components/MainPage/MainPage';
import CreateBlog from './components/CreateBlog/CreateBlog'

import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/createblog" element={<CreateBlog />} />
        <Route path="*" element={<Navigate to="/mainpage" />} />
      </Routes>
    </div>
  );
}

export default App;
