import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PayOnlinePage from './pages/PayOnlinePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/give" element={<PayOnlinePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
