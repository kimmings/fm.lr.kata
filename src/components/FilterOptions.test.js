import React from 'react';
import { mount } from 'enzyme';
import FilterOptions from './FilterOptions';

describe('Filtering', () => {
    it('should render options', () => {
        const options = [{name:'one' }, {name:'two'}, {name:'three'}];
        const wrapper = mount(<FilterOptions data={options} />);
        expect(wrapper.find('.badge').length).toEqual(3);    
    });
});