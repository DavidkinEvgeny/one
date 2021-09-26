// import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import CategoryDetail from './pages/Category';
import ProductDetail from './pages/Product';
      

function App() {
  return (
      <div className="App">
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/category/:slug' component={CategoryDetail} />
          <Route path='/prooduct/:slug' component={ProductDetail} />
        </Switch>
      </div>
  );
}

export default App;
