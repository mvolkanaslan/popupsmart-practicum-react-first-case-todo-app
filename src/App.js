import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import ContentLayout from './components/ContentLayout/ContentLayout';
import Login from './components/Login/Login';
import NotFound from './components/Pages/NotFound';

function App() {
  const username = useSelector(state=>state.todo.username)

  return (
    <Routes>
      <Route path="/" element={username ? <ContentLayout /> : <Navigate to="/Login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
