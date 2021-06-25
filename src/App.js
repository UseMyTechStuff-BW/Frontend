import './App.css';
import { Switch, Route, Link } from 'react-router-dom'
import MarketplaceHome from './components/Marketplace/MarketplaceHome'
import MarketItem from './components/Marketplace/MarketItem'
import Home from './components/Home'
import AddEquipmentForm from './components/AddEquipmentForm'
import Login from './components/Login/login'
import PrivateRoute from './components/Login/PrivateRoute';

function App() {


  const isAuth = localStorage.getItem('token');


  return (
    <>
    <header>
    <div className="logoAndHeading">
      <Link to='/'><img
      className="logo" 
      src="https://dcassetcdn.com/design_img/501499/151249/151249_3571586_501499_thumbnail.jpg"
      alt="tech stuff"
      /></Link>
    </div>

    <nav>
      <Link to='/marketplace'>Items for Rent</Link> 
      <Link to='/login'>Login</Link>
      <Link to='/register'>Register</Link>
    </nav>
    </header>

    <Switch>
        <Route exact path = '/marketplace'>
          <MarketplaceHome/>
        </Route>

        <Route path = '/marketplace/:equipment_id'>
          <MarketItem/>
        </Route>

        <Route exact path='/'>
          <Home />
        </Route>

        <PrivateRoute exact path='/protected'>
          <AddEquipmentForm />
        </PrivateRoute>

        <Route path = '/login'>
          <Login/>
        </Route>

     </Switch>

    </>
  );
}

export default App;
