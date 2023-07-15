import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Feed } from './pages/Feed';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Feed />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
