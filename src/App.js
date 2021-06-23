import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MarketplaceHome from './components/Marketplace/MarketplaceHome';
import MarketItem from './components/Marketplace/MarketItem';

function App() {
  return (
    <div className="logoAndHeading">
      <img
      className="logo" 
      src="https://dcassetcdn.com/design_img/501499/151249/151249_3571586_501499_thumbnail.jpg"
      alt="tech stuff"
      />
      <h1 className="mainHeading">Use My Tech Stuff</h1>

    <BrowserRouter>
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

      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
