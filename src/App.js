import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Categories from './components/Categories';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Services from './Pages/Services';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/skills" element={<Categories />}></Route>
        <Route path="/Service" element={<Services />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
