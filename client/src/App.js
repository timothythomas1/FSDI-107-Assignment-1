import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';
import Catalog from './components/Catalog';


function App() {
  return (

    < div className="App" >
      <NavBar />
      <hr></hr>
      <Catalog />
      <Footer />
    </ div >
  );
}

export default App;
