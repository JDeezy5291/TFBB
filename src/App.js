import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dumbbells from './Components/Dumbbells/Dumbbells';
import Home from './Components/Home/Home';
import Barbells from './Components/Barbells/Barbells';
import Cages from './Components/Cages/Cages';
import Benches from './Components/Benches/Benches';
import Plates from './Components/Plates/Plates';

function App() {
  // might delete
  // const currentFieldEditor1 = this.FieldEditor1.current;
  // console.log(currentFieldEditor1)

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/apparel">
            <Barbells />
          </Route>
          <Route path="/barbells">
            <Barbells />
          </Route>
          <Route path="/dumbbells">
            <Dumbbells />
          </Route>
          <Route path="/cages">
            <Cages />
          </Route>
          <Route path="/benches">
            <Benches />
          </Route>
          <Route path="/plates">
            <Plates />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        {/* if .toggleClass is active add .header__overlay to App component */}
        {/* {!toggleMenu ? (
        <div className="header__overlay"></div>    
      ) : null} */}
      </div>
    </Router>
  );
}

export default App;
