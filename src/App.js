import './App.css';
import Article from './components/Article';
import Description from './components/Description';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
        <Header />
        <Home />
        <Description />
        <Article />
        <Footer />
    </div>
  );
}

export default App;
