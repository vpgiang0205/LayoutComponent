import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import "jquery/dist/jquery.min.js"
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';
function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
