import listings from './listings.json';

export function fetchListings() {
    return {
        type: 'FETCH_LISTINGS',
        listings
    };
}
