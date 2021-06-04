import React, { Component } from 'react';

class ToDo3 extends Component {
    render() {
        return (
            <div className="todo">
                <h2>TODO 3: Create a "Similar listings" block</h2>
                <p>
                    Fetch the ids of similar listings from this REST API:
                </p>
                <p>
                    <a href="https://ebkqjitsgh.execute-api.eu-central-1.amazonaws.com/prod/listings/1/similar">
                        https://ebkqjitsgh.execute-api.eu-central-1.amazonaws.com/prod/listings/1/similar
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
        )
    }
}

export default ToDo3;
