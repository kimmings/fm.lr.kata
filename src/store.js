import { createStore } from 'redux'
import { reducers } from './reducers/reducers'
import { getUniqueFilters }  from './utils/getFilterOptions';
import data from './__data';

const filterData = getUniqueFilters(data);

const defaultState = {
    filters: filterData,
    filteredHotels: data,
    hotels: data,
    orderby: null,
};

export default createStore(reducers, defaultState);
