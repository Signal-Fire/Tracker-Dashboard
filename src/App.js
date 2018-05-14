import React from 'react';
import { Header, Overview } from './components';
import { LoginModal } from './components/Login';
import './App.css';

export default () => {
  return (
    <div className="App">
      <LoginModal />
      <Header />
      <Overview />
    </div>
  )
}
