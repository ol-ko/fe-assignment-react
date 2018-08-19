import React, { Component } from 'react';
import ToDo2 from "../todos/ToDo2";
import ToDo3 from "../todos/ToDo3";

class DetailPage extends Component {
    render() {
        return (
            <div>
                <h1>Listing #{this.props.match.params.listingId}</h1>
                <ToDo2></ToDo2>
                <ToDo3></ToDo3>
            </div>
        )
    }
}

export default DetailPage;
