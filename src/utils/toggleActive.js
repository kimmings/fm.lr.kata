import { find, propEq } from 'ramda';
export const toggleActive = (what, list) => {
    const found = find(propEq('name', what.name))(list);
    found.active = !found.active;
}