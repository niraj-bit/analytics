import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Features } from './components/Features';
import { Card } from './components/Card';


function App() {
  return (
  <div>

  <Header/>
  <Features/>
  <Card/>
  <Footer/>
    </div>
  );
}

export default App;
