import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Navbar from './Navbar';
import Future from './Future';
import Featured from './Featured';
import Mission from './Mission';
import Footer from './Footer';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Future/>
      <Featured/>
      <Mission/>
      <Footer/>
    </div>
  );
}

export default App;
