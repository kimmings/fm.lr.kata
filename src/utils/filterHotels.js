export const filterHotels = ( hotels, filterNames ) => { 
    if( filterNames.length === 0 ) return hotels;
    
    const filtered = hotels.map(h => {  
        return isFiltered(h.facilities, filterNames) ? h : null ;
    })
    .filter( n => n !== null);
    return filtered;
}

export const isFiltered = ( fac, filterNames ) => {
    let isMatch = false;
    for(var i =0; i< filterNames.length; i++ ){
        if( fac.indexOf(filterNames[i]) > -1) isMatch = true;
    }

    return isMatch;
}