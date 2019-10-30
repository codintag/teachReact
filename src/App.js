import React, { Component } from 'react'
import './App.css';
import Counter from "./compo"
import TaskApp from "./todolist"
import Nav from "./nav"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import Blog from './Blog'
import Apropos from './Apropos'
import Notfound from './Notfound'

{/* Au dessus mes imports */}
  
class App extends Component {
        render() {
          return ( 
    <Router>
    <div className="App">
    <Nav />
<Switch>
    <Route exact path="/" />
    <Route exact path="/Blog" component = { Blog }/>
    <Route exact path="/Apropos" component = { Apropos }/>
    <Route><Notfound titre = "Page Not Found!" /></Route>
</Switch>
<hr />
<hr />
<hr />

<TaskApp />
<hr />
<hr />
<hr />
      <Counter color="violet" step={2}/>
      <Counter color="skyblue" step={1}/>
      </div> 
    </Router>
          )
        }
      }
    

    

    
      

export default App;
