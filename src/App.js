import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchHotels from './components/SearchHotels';
import AdminDashboard from './components/AdminDashboard';
import Login from './components/Login';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={SearchHotels} />
                <Route path="/admin" component={AdminDashboard} />
                <Route path="/login" component={Login} />
            </Switch>
        </Router>
    );
}

export default App;
