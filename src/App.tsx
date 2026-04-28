import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { TranslationProvider } from './i18n/TranslationProvider';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Products = React.lazy(() => import('./pages/Products'));
const SpareParts = React.lazy(() => import('./pages/SpareParts'));
const EngineeringWorks = React.lazy(() => import('./pages/EngineeringWorks'));
const Contact = React.lazy(() => import('./pages/Contact'));

function App() {
  return (
    <TranslationProvider>
      <BrowserRouter>
        <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center text-primary font-bold">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="products" element={<Products />} />
              <Route path="spare-parts" element={<SpareParts />} />
              <Route path="engineering-works" element={<EngineeringWorks />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </TranslationProvider>
  );
}

export default App;
