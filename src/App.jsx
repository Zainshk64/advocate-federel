import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/commons/Navbar';
import Footer from './components/commons/Footer';
import ScrollToTop from './components/commons/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Judges from './pages/Judges';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/judges" element={<Judges />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;