import './App.css';
import { Switch, Route, Link } from 'react-router-dom'
import MarketplaceHome from './components/Marketplace/MarketplaceHome'
import MarketItem from './components/Marketplace/MarketItem'
import Home from './components/Home'

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

        <Route path='/'>
          <Home />
        </Route>
     </Switch>

    </>
  );
}

export default App;
