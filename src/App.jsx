import React, { useState } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Navigation from './components/common/Navigation';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import NotFound from './components/pages/NotFound';
import './styles/global.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home />;
      case 'dashboard':
        return <Dashboard />;
      default:
        return <NotFound />;
    }
  };

  return (
    <div className="app">
      <Header />
      <Navigation setCurrentPage={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
