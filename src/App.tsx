import Page from '@/components/app-page';
import LandingPage from '@/components/landing'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chat" element={<Page />} />
      </Routes>
    </Router>
  );
}

export default App;
