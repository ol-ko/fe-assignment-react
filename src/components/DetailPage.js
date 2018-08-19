import React, { Component } from 'react';

class DetailPage extends Component {
    render() {
        return (
            <div>
                <div className="todo">
                    <h2>TODO 2: Display details of a single listing</h2>
                    <p>
                        Things to be displayed:
                    </p>
                    <ul>
                        <li>listing picture</li>
                        <li>listing title</li>
                        <li>listing description</li>
                    </ul>
                    <p>
                        Add some minimal styling (design and layout is up to you)
                    </p>
                </div>

                <div className="todo">
                    <h2>TODO 3: Create a "Similar listings" block</h2>
                    <p>
                        Fetch the ids of similar listings from this REST API:
                    </p>
                    <p>
                        <a href="https://properties-34748.firebaseio.com/similar/1.json">
                            https://properties-34748.firebaseio.com/similar/1.json
                        </a>
                    </p>
                    <p>where "1" is an id of a property you are fetching similar listings for.</p>
                    <p>
                        For each of the retrieved ids display the following:
                    </p>
                    <ul>
                        <li>listing picture</li>
                        <li>listing title</li>
                        <li>listing description</li>
                    </ul>
                    <p>
                        Display no more than 3 properties in this block -
                        if there are more than 3 ids - implement some kind of pagination.
                    </p>
                    <p>
                        Add some minimal styling (design and layout is up to you)
                    </p>
                </div>
            </div>
        )
    }
}

export default DetailPage;
