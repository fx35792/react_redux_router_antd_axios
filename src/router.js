import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Admin from './admin';
import App from './App';
import Login from './pages/login';
import Home from './pages/home';
import Buttons from './pages/ui/buttons';
import Modals from './pages/ui/modals';
import NoPage from './pages/404'

class Router extends Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/" render={() =>
                            <Admin>
                                <Switch>
                                    <Route path='/home' component={Home}/>
                                    <Route path='/ui/buttons' component={Buttons}/>
                                    <Route path='/ui/modals' component={Modals}/>
                                    <Route component={NoPage}/>
                                </Switch>
                            </Admin>
                        }/>

                    </Switch>
                </App>
            </HashRouter>
        )
    }
}

export default Router;
