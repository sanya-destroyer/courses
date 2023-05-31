import {formatDate} from '../formatDate';


describe('Format date util', () => {
    it('should format date with slash separator', () => {
        const date  = "15/12/2022";
        const expectedDate = "15.12.2022"

        expect(formatDate(date)).toBe(expectedDate);
    });

    it('should format date with dot separator', () => {
        const date  = "15.12.2022";
        const expectedDate = "15.12.2022"

        expect(formatDate(date)).toBe(expectedDate);
    });

    it('should format date day and month to two digits', () => {
       const date = '1.1.2022';
       const expectedDate = "01.01.2022";

       expect(formatDate(date)).toBe(expectedDate);
    });

    it('should format date day and month to two digits', () => {
        const date = '1/1/2022';
        const expectedDate = "01.01.2022";

        expect(formatDate(date)).toBe(expectedDate);
    });

    it('should return string Unknown if date has incorrect format', () => {
        const date = "13 13 2022";
        const expectedReturn = "Unknown";

        expect(formatDate(date)).toBe(expectedReturn);
    });

    it('should return string Unknown if date parts is negative numbers', () => {
       const date = "-15.2.2022";
       const expectedReturn = "Unknown";

       expect(formatDate(date)).toBe(expectedReturn);
    });

    it('should return string Unknown if date parts is not numbers', () => {
        const date = "dd.mm.yyyy";
        const expectedReturn = "Unknown";

        expect(formatDate(date)).toBe(expectedReturn);
    })
})