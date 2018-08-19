import React, {Component} from "react";

class ListingList extends Component {
    componentDidMount() {
        this.props.fetchListings();
    }
    render() {
        const listingList = this.props.listings.map((listing) => (
            <li>{ listing.title }</li>
        ));

        return (
            <div>
                <div className="todo">
                    <h2>TODO 1: Navigation to property details</h2>
                    <p>User should be able to navigate to the details page by clicking on the property.</p>
                </div>
                <ul>
                    { listingList }
                </ul>
            </div>
        )
    }
}

export default ListingList;
