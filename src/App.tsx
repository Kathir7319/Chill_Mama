import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import OurStoryPage from './pages/OurStoryPage';
import CateringPage from './pages/CateringPage';
import FindUsPage from './pages/FindUsPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/our-story" element={<OurStoryPage />} />
        <Route path="/catering" element={<CateringPage />} />
        <Route path="/find-us" element={<FindUsPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}
