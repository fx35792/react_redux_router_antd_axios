import React, {Component} from 'react';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import Admin from './admin';
import App from './App';
import Login from './pages/login';
import Home from './pages/home';
import Buttons from './pages/ui/buttons';
import Modals from './pages/ui/modals';
import Loadings from './pages/ui/loadings';
import Notice from './pages/ui/notice';
import Messages from './pages/ui/message';
import Tabs from './pages/ui/tabs';
import Gallery from './pages/ui/gallery';
import Carousel from './pages/ui/carousel';
import FormRegister from './pages/form/register';
import FormLogin from './pages/form/login';
import TableBasic from './pages/table/basicTable';
import TableHigh from './pages/table/highTable';
import Rich from './pages/rich';
import City from './pages/city';

// import NoPage from './pages/404'

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
                                    <Route path='/ui/loadings' component={Loadings}/>
                                    <Route path='/ui/notification' component={Notice}/>
                                    <Route path='/ui/messages' component={Messages}/>
                                    <Route path='/ui/tabs' component={Tabs}/>
                                    <Route path='/ui/gallery' component={Gallery}/>
                                    <Route path='/ui/carousel' component={Carousel}/>
                                    <Route path='/form/reg' component={FormRegister}/>
                                    <Route path='/form/login' component={FormLogin}/>
                                    <Route path='/table/basic' component={TableBasic}/>
                                    <Route path='/table/high' component={TableHigh}/>
                                    <Route path='/rich' component={Rich}/>
                                    <Route path='/city' component={City}/>
                                    <Redirect to='/home'/>
                                    {/*<Route component={NoPage}/>*/}
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
