import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import StudentDashboard from './components/User/StudentDashboard.jsx'
import AdminDashboard from './components/Admin/AdminDashboard';

function App() {
  return (
    <>
      <Routes>
        <Route path="/admin/*" element={<AdminDashboard />} />
        {/* Other routes */}
      </Routes>
    </>
  );
}

export default App;
