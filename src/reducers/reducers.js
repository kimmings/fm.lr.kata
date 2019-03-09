import { find, propEq, pluck, filter } from 'ramda';
import { filterHotels } from '../utils/filterHotels';

const toggleActive = (what, list) => {
    const found = find(propEq('name', what.name))(list);
    found.active = !found.active;
}

export function reducers(state, action) {
    let hotels = state.hotels.slice();
    switch (action.type) {
        case 'TOGGLE_FILTER':
            const filters = state.filters.slice();
            toggleActive(action.payload, filters);
            const filterNames = pluck('name', filter(n => n.active, filters));
            const filteredHotels = filterHotels(hotels, filterNames);
            return {
                ...state,
                filters,
                filteredHotels
            }
        case 'ORDER_HOTELS':    
            return {
                ...state,
            };
        default:
            return state
    }
}
