export const orderHotels = (hotels, orderBy) => {
    if( orderBy === 'asc') {
        return hotels.sort(function(a, b){return a.starRating-b.starRating});
    } else {
        return hotels.sort(function(a, b){return b.starRating-a.starRating});
    }
}