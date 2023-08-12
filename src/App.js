import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// Import các thành phần tương ứng
import ProductPage from './pages/ProductPage';
import AdminPage from './pages/AdminPage';

import DefaultLayout from './DefaultLayout/index_main';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/product" component={ProductPage} />
                <Route path="/admin" component={AdminPage} />
                <Route path="/" exact component={DefaultLayout} />
            </Switch>
        </Router>
    );
}

export default App;
