import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-grow">
        <Routes>
          {/* Redirect from root (/) to the dashboard */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          {/* Route to the Home (Dashboard) page */}
          <Route path="/dashboard" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;