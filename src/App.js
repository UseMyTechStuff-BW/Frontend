import './App.css';
import { Switch, Route, Link } from 'react-router-dom'
import MarketplaceHome from './components/Marketplace/MarketplaceHome'
import MarketItem from './components/Marketplace/MarketItem'
import Home from './components/Home'
import AddEquipmentForm from './components/AddEquipmentForm'

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
    </div>

    <nav>
      <Link to='/my-equipment'>My Stuff</Link>
      <Link to='/login'>Login</Link>
      <Link to='/register'>Register</Link>
    </nav>
    </header>

    <Switch>
        <Route path = '/marketplace'>
          <MarketplaceHome/>
        </Route>

        <Route path = '/marketplace/:id'>
          <MarketItem/>
        </Route>

        {/* <Route path = '/renter/cart'>
          <Cart/>
        </Route> */}

        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='/my-equipment'>
          <AddEquipmentForm />
        </Route>

     </Switch>

    </>
  );
}

export default App;
