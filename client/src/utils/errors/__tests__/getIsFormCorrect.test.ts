import getIsFormValid from '../getIsFormCorrect';


describe('Is form correct util', () => {
    it('should return true', () => {
        const values = [true, true, true];

        expect(getIsFormValid(...values)).toBe(true);
    });

    it('should return false', () => {
        const values = [true, true, false];

        expect(getIsFormValid(...values)).toBe(false);
    });

    it('should return false', () => {
        const values: boolean[] = [];

        expect(getIsFormValid(...values)).toBe(true);
    })
})