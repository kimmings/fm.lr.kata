import { pluck, filter } from 'ramda';
import { filterHotels } from '../utils/filterHotels';
import { orderHotels } from '../utils/orderHotels';
import { toggleActive } from '../utils/toggleActive';

export function reducers(state, action) {
    let hotels = state.hotels.slice();
    switch (action.type) {
        case 'TOGGLE_FILTER':
            const filters = state.filters.slice();
            toggleActive(action.payload, filters);
            const filterNames = pluck('name', filter(n => n.active, filters));
            const filteredHotels = orderHotels(filterHotels(hotels, filterNames), state.orderBy);
            return {
                ...state,
                filters,
                filteredHotels
            }
        case 'ORDER_HOTELS':  
            hotels = state.filteredHotels.slice()
            const orderedHotels = orderHotels(hotels, action.payload);
            return {
                ...state,
                orderBy: action.payload,
                filteredHotels: orderedHotels
            };
        default:
            return state
    }
}
