import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Products from './component/Products';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <Products/>
    </div>
  );
}

export default App;
