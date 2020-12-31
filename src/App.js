import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dumbbells from './Components/Dumbbells/Dumbbells';
import Home from './Components/Home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/barbells">
            {/* <Barbells /> */}
          </Route>
          <Route path="/dumbbells">
            <Dumbbells />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
