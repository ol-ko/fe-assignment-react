import React, {Component} from "react";
import './ListingList.css';

import ToDo1 from '../todos/ToDo1';
import {Link} from "react-router-dom";

class ListingList extends Component {
    componentDidMount() {
        this.props.fetchListings();
    }

    getListingImage(listing) {
        return listing.images ? (<img src={listing.images[0]} alt={listing.title}/>) : '';
    }

    getListingList() {
        return this.props.listings.map((listing, key) => {
            return (
                <li className="listing" key={key}>
                    <div className="img">
                        {this.getListingImage(listing)}
                    </div>
                    <p>
                        {listing.title}
                    </p>
                </li>
            )
        });
    }

    render() {
        return (
            <div>
                <ToDo1></ToDo1>
                <ul className="listing-list">
                    { this.getListingList() }
                </ul>
            </div>
        )
    }
}

export default ListingList;
