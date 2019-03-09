import { getUniqueFilters } from './getFilterOptions';

describe('Get Filter Options', () => {
    it('should get filter options', () => {
        const opts = [ { facilities: ['one', 'two'] }, { facilities: ['two', 'three'] } ];
        const expectedOutput = [{ name: 'one'}, { name: 'two'}, { name: 'three' }];
        expect(getUniqueFilters(opts)).toEqual(expectedOutput);
    });
});