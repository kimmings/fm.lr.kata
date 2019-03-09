import { isFiltered, filterHotels } from './filterHotels';

describe('Filter Hotels',  () => {
    describe('isFiltered', () => {
        it('should return true if one or more hotel facilities match', () => {
            const filterNames = ['foo', 'barr'];
            const facilities = ['foo', 'moo'];

            expect(isFiltered(facilities, filterNames)).toBe(true);
        });
        
        it('should return true if one or more hotel facilities match (not first)', () => {
            const filterNames = ['foo', 'barr', 'wibble'];
            const facilities = ['wibble'];

            expect(isFiltered(facilities, filterNames)).toBe(true);
        });

        it('should return false if no hotel facilities match', () => {
            const filterNames = ['foo', 'barr'];
            const facilities = ['bloo', 'moo'];

            expect(isFiltered(facilities, filterNames)).toBe(false);
        }); 
    });

    describe('filterHotels', () => {
        it('should return hotels that match facilities', () => {
            const hotels = [
                { facilities: ['one','two'] }, 
                { facilities: ['one','three'] }
            ];
            expect(filterHotels(hotels, ['three'])).toEqual([hotels[1]]);
        });
        
        it('should return hotels that match multi facilities', () => {
            const hotels = [
                { facilities: ['one','two'] }, 
                { facilities: ['one','three'] }
            ];
            expect(filterHotels(hotels, ['three', 'one'])).toEqual(hotels);
        });

        it('should return no hotels if no match', () => {
            const hotels = [
                { facilities: ['one','two'] }, 
                { facilities: ['one','three'] }
            ];
            expect(filterHotels(hotels, ['no match'])).toEqual([]);
        });
    });
})