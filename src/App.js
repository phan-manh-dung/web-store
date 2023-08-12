import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// Import các thành phần tương ứng
import ProductPage from './pages/ProductPage';
import AdminPage from './pages/AdminPage';

import DefaultLayout from './DefaultLayout/index_main';
import DeletePage from './pages/DeletePage';

function App() {
    return (
        <div id="root">
            <Router>
                <Switch>
                    <Route path="/product" component={ProductPage} />
                    <Route path="/admin/delete" component={DeletePage} />
                    <Route path="/admin" component={AdminPage} />
                    {/* <Route path="/delete" component={DeletePage} /> */}
                    <Route path="/" exact component={DefaultLayout} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
