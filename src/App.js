import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';
import Comments from './Components/Comments';
import Posts from './Components/Posts';
import Photos from './Components/Photos';
import Favorites from './Components/Favorites';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

export default class App extends Component{
    render(){
      return(
        <BrowserRouter>
        <div>
        <Navbar/>
          <Switch>
          <Route exact path="/" component={Profile}></Route>
          <Route exact path="/comments" component={Comments}></Route>
          <Route exact path="/posts" component={Posts}></Route>
          <Route exact path="/photos" component={Photos}></Route>
          <Route exact path="/favorites" component={Favorites}></Route>
          </Switch>
          
        </div>
        </BrowserRouter>
      )
    }
}