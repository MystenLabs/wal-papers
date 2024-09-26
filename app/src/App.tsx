import PaperLayout from './layout/paperLayout/PaperLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Custom404 from './pages/Custom404';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/abs/:doi" element={<PaperLayout />} />
      <Route path="*" element={<Custom404 />} />
    </Routes>
  </Router>
  );
}


export default App;
