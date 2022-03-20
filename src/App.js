//React Imports
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'

//Component Imports
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

//Styles
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>My Articles</h1>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
          <NavLink to='/about'>About</NavLink>
        </nav>

        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>

            <Route path='/contact'>
                <Contact/>
            </Route>

            <Route path='/about'>
                <About/>
            </Route>
        </Switch>
        
        

      </BrowserRouter>
    </div>
  );
}

export default App
