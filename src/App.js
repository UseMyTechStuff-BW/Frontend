import './App.css';
import AddEquipmentForm from "./components/AddEquipmentForm";
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
    <header>
    <div className="logoAndHeading">
      <Link to='/'><img
      className="logo" 
      src="https://dcassetcdn.com/design_img/501499/151249/151249_3571586_501499_thumbnail.jpg"
      alt="tech stuff"
      /></Link>
      <h1 className="mainHeading">Use My Tech Stuff</h1>
    </div>
    <nav>
      <Link to='/login'>Login</Link>
      <Link to='/register'>Register</Link>
    </nav>
    </header>

    </>
  );
}

export default App;
