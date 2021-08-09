import React, { Component,Fragment } from 'react'
import {Route,Switch} from 'react-router-dom'
import Login from './pages/login/login';
import Admin from './pages/admin/admin'
import './App.css';
class App extends Component {
    render() {
        return (
           <Fragment>
               {/*  <Button type="primary">Primary Button</Button> */}
                <Switch>
                     <Route path='/login' component={Login}></Route>
                     <Route path='/' component={Admin}></Route>
                </Switch>
           </Fragment>
              
             
           
        )
    }
}
export default App;