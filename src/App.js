import './App.css';
import BaseBody from './components/BaseBody/BaseBody';
import Footer from './components/Footer/Footer';
import IntegrationPage from './components/IntegrationPage/IntegrationPage';
import Navbar from './components/NavBar/Navbar';
import Partners from './components/Partners/Partners';
import PassivePage from './components/PassivePage/PassivePage';
import Roadmap from './components/Roadmap/Roadmap';

function App() {
  return (
    <div className="App">
    <Navbar />
    <BaseBody />
    <Partners />
    <IntegrationPage />
    <PassivePage />
    <Roadmap />
    <Footer />
    </div>
  );
}

export default App;
