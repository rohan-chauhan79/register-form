import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './pages/Register'
import Users from './pages/Users'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
