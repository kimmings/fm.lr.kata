import React from 'react';
import { shallow } from 'enzyme';
import FilterOption from './FilterOption';

describe('Filter Option', () => {
    it('should trigger click function onCLick', () => {
        const spy = jest.fn()
        const option = { name: 'foo' };
        const wrapper = shallow(<FilterOption variant="primary" clickFn={spy} option={option} />);
        wrapper.simulate('click')
        expect(spy).toHaveBeenCalledWith(option); 
    });
});

