import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OpenRolesPage from './pages/OpenRolesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/roles" element={<OpenRolesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
