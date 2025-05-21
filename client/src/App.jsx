import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Accommodation from './pages/Accommodation';
import Clubs from './pages/Clubs';
import Fests from './pages/Fests';
import Amenities from './pages/Amenities';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ParallaxProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/accommodation" element={<Accommodation />} />
              <Route path="/clubs" element={<Clubs />} />
              <Route path="/fests" element={<Fests />} />
              <Route path="/amenities" element={<Amenities />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </Router>
    </ParallaxProvider>
  );
}

export default App;
