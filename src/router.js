import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Admin from './admin';
import App from './App';
import Login from './pages/login'
import Home from './pages/home'

class Router extends Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/" render={()=>
                            <Admin>
                                <Switch>
                                    <Route path='/home' component={Home} />
                                </Switch>
                            </Admin>
                        }>
                        </Route>
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}

export default Router;
