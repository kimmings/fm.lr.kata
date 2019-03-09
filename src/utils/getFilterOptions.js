import { pluck, uniq, unnest, map} from 'ramda';

export function getUniqueFilters(what) {
    const getFacililties = pluck('facilities')
    return map( v => ({ name: v, active: false }), uniq(unnest(getFacililties(what))) );
}
