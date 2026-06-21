import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PayOnlinePage from './pages/PayOnlinePage';
import PartnerPage from './pages/PartnerPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/give" element={<PayOnlinePage />} />
        <Route path="/partner" element={<PartnerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
