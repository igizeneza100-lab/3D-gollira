/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import SplashScreen from './components/SplashScreen';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Project from './pages/Project';
import ServicesPage from './pages/Services';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(() => {
    // Check if splash has already been shown in this session
    return sessionStorage.getItem('splashShown') === 'true';
  });

  const handleSplashComplete = () => {
    setIsLoaded(true);
    sessionStorage.setItem('splashShown', 'true');
  };

  return (
    <Router>
      {!isLoaded && <SplashScreen onComplete={handleSplashComplete} />}
      <SmoothScroll>
        <div className={`relative min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Project />} />
              {/* Fallback path */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </SmoothScroll>
    </Router>
  );
}

