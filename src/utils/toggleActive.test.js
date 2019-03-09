import { toggleActive } from './toggleActive';

describe('Toggle Active', () => {
    const list = [{ name: 'foo', active: false },{ name: 'moo', active: true }];
    it('should toggle active status false to true', () => {
        expect(list[0].active).toBe(false);
        toggleActive({name: 'foo'}, list);
        expect(list[0].active).toBe(true);
    });
    
    it('should toggle active status true to false', () => {
        expect(list[1].active).toBe(true);
        toggleActive({name: 'moo'}, list);
        expect(list[1].active).toBe(false);
    });
});