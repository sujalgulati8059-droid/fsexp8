import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Exp1 from './pages/Exp1';
import Exp2 from './pages/Exp2';
import Exp3 from './pages/Exp3';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exp1" element={<Exp1 />} />
        <Route path="/exp2" element={<Exp2 />} />
        <Route path="/exp3" element={<Exp3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
