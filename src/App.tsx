// /**
//  * @license
//  * SPDX-License-Identifier: Apache-2.0
//  */

// import { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import SmoothScroll from './components/SmoothScroll';
// import SplashScreen from './components/SplashScreen';
// import Home from './pages/Home';
// import Contact from './pages/Contact';
// import Project from './pages/Project';
// import ServicesPage from './pages/Services';
// import SingleService from './pages/SingleService';
// import TermsOfService from './pages/TermsOfService';
// import PrivacyPolicy from './pages/PrivacyPolicy';

// export default function App() {
//   const [isLoaded, setIsLoaded] = useState(() => {
//     // Check if splash has already been shown in this session
//     return sessionStorage.getItem('splashShown') === 'true';
//   });

//   const handleSplashComplete = () => {
//     setIsLoaded(true);
//     sessionStorage.setItem('splashShown', 'true');
//   };

//   return (
//     <Router>
//       {!isLoaded && <SplashScreen onComplete={handleSplashComplete} />}
//       <SmoothScroll>
//         <div className={`relative min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
//           <Navbar />
          
//           <main className="flex-grow">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/services" element={<ServicesPage />} />
//               <Route path="/services/:id" element={<SingleService />} />
//               <Route path="/contact" element={<Contact />} />
//               <Route path="/projects" element={<Project />} />
//               <Route path="/terms" element={<TermsOfService />} />
//               <Route path="/privacy" element={<PrivacyPolicy />} />
//               {/* Fallback path */}
//               <Route path="*" element={<Home />} />
//             </Routes>
//           </main>

//           <Footer />
//         </div>
//       </SmoothScroll>
//     </Router>
//   );
// }

import React from "react";

function App() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-8xl font-bold text-gray-800">404</h1>

      <h2 className="text-2xl font-semibold text-gray-600 mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-2 text-center">
        The website or page you are looking for is not available.
      </p>

      <button
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        onClick={() => window.location.href = "/"}
      >
        Go Home
      </button>
    </div>
  );
}

export default App;
