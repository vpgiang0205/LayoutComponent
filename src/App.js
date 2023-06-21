import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import "jquery/dist/jquery.min.js"
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header';
import Item from './components/Item/Item';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Item />
      <Footer />
    </div>
  );
}

export default App;
