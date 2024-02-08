import { Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/brewery/:id" element={<Details />}></Route>
      </Routes>
      <Footer />
    </div>
  )
};

export default App;