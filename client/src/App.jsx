import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Accommodation from './pages/Accommodation';
import Clubs from './pages/Clubs';
import Fests from './pages/Fests';
import Amenities from './pages/Amenities';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import StudentAchievements from './pages/achievements/StudentAchievements';
import FacultyRecognition from './pages/achievements/FacultyRecognition';
import Placements from './pages/achievements/Placements';
import Startups from './pages/achievements/Startups';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import ScrollToTop from "./components/ScrollToTop"; 
import Alumni from './pages/Alumni';

function App() {
  return (
    <ParallaxProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/accommodation" element={<Accommodation />} />
              <Route path="/clubs" element={<Clubs />} />
              <Route path="/fests" element={<Fests />} />
              <Route path="/amenities" element={<Amenities />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/alumni" element={<Alumni />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/achievements/student" element={<StudentAchievements />} />
              <Route path="/achievements/faculty" element={<FacultyRecognition />} />
              <Route path="/achievements/placements" element={<Placements />} />
              <Route path="/achievements/startups" element={<Startups />} />
            </Routes>
          </main>
        </div>
        <ScrollToTopButton />
        <Footer />
      </Router>
    </ParallaxProvider>
  );
}

export default App;
