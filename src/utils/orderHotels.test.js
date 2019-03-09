import { orderHotels } from './orderHotels';

describe('Order Hotels',  () => {
    let hotels;
    beforeEach(() => {
        hotels = [{ starRating: 3 }, { starRating: 2 }, {starRating: 1 }, { starRating: 5 }];
    })
    it('asc', () => {
        const ordered = orderHotels(hotels, 'asc');
        expect(ordered[0].starRating).toBe(1);
        expect(ordered[1].starRating).toBe(2);
        expect(ordered[3].starRating).toBe(5);
    });

    it('desc', () => {
        const ordered = orderHotels(hotels, 'desc');
        expect(ordered[0].starRating).toBe(5);
        expect(ordered[1].starRating).toBe(3);
        expect(ordered[3].starRating).toBe(1);
    });
});