import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.scss';

import ListingList from './components/ListingList';
import ListingDetails from './components/ListingDetails';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <Link to="/">Properties for rent</Link>
                </nav>

                <div className="App">
                    <Route exact path="/" component={ListingList}/>
                    <Route exact path="/listings/:listingId" component={ListingDetails}/>
                </div>
            </div>
        </Router>
    );
}

export default App;
