import Navigation from './components/Navigation';
import CursorBackground from './components/CursorBackground';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Research from './pages/Research';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen relative">
      <CursorBackground />
      <Navigation />
      <Home />
      <About />
      <Experience />
      <Research />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
