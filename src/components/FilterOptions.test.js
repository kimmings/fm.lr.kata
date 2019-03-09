import React from 'react';
import { mount } from 'enzyme';
import FilterOptions from './FilterOptions';

describe('Filtering', () => {
    let options;
    let wrapper;
    describe('Filtering Options', () => {
        beforeEach(() => {
            options = [{name:'one', active: true}, {name:'two', active: false}, {name:'three', active: false}];
            wrapper = mount(<FilterOptions data={options} />);
        });

        it('should render options', () => {
            expect(wrapper.find('.badge').length).toEqual(3);    
        });
    
        it('should render active options with a different variant', () => {
            expect(wrapper.find('.badge-primary').length).toEqual(1);
            expect(wrapper.find('.badge-secondary').length).toEqual(2);    
        });
    });
});