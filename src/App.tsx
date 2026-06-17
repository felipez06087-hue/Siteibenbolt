import Header from './components/Header';
import Hero from './components/Hero';
import NewsBar from './components/NewsBar';
import About from './components/About';
import Services from './components/Services';
import Ministries from './components/Ministries';
import Contribution from './components/Contribution';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <NewsBar />
        <About />
        <Services />
        <Ministries />
        <Contribution />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
