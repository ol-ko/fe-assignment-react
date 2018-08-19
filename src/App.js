import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './store/reducers.js';

import Home from './components/Home';
import DetailPage from './components/DetailPage';

const store = createStore(reducers);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <div>
                            <Link to="/">Home</Link>
                        </div>

                        <div className="App">
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/detail/:listingId" component={DetailPage}/>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
