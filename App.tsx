import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import DocPage from './pages/DocPage';
import OrderPage from './pages/OrderPage';
import HelpPage from './pages/HelpPage';
import SetupPage from './pages/SetupPage';
import AfterSalesPage from './pages/AfterSalesPage';
import MyOrdersPage from './pages/MyOrdersPage';
import AboutPage from './pages/AboutPage';
import GpuCapabilityPage from './pages/GpuCapabilityPage';
import RecommendedConfigPage from './pages/RecommendedConfigPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<DocPage />} />
          <Route path="/setup" element={<SetupPage />} />
          <Route path="/recommended" element={<RecommendedConfigPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/my-orders" element={<MyOrdersPage />} />
          <Route path="/gpu-list" element={<GpuCapabilityPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/after-sales" element={<AfterSalesPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;