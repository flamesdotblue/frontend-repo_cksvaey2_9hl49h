import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContentSections from './components/ContentSections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <ContentSections />
      <Footer />
    </div>
  );
}

export default App;
