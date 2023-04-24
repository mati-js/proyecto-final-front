import React from 'react';
import { Layout } from 'antd';
import { Routes, Route } from 'react-router-dom';
import Container from './pages/general/components/Container';
import TaskList from './pages/home/components/TaskList';
import Header from './pages/general/components/Header';
import Contact from './pages/contact/components/Contact';
import Login from './pages/login/components/Login';
import './App.css';

const App = () => (
  <Layout className="layout">
    <Header />
    
    <Routes>
      <Route path="/" element={<Container child={<TaskList/>} />} />
      <Route path="contacto" element={<Container child={<Contact/>} />} />
      <Route path='login' element={<Container child={<Login/>} />} />
    </Routes>
    
  </Layout>
);

export default App;