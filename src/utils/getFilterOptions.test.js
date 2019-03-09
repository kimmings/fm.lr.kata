import { getUniqueFilters } from './getFilterOptions';

describe('Get Filter Options', () => {
    it('should get filter options', () => {
        const opts = [ { facilities: ['one', 'two'] }, { facilities: ['two', 'three'] } ];
        const expectedOutput = [{ name: 'one', active: false }, { name: 'two', active: false }, { name: 'three', active: false  }];
        expect(getUniqueFilters(opts)).toEqual(expectedOutput);
    });
});