import {formatDuration} from '../formatDuration';


describe('Format duration util', () => {
   it("should return 02:00", () => {
       const minutes = 120;
       const expectedDuration = "02:00"

       expect(formatDuration(minutes)).toBe(expectedDuration);
   });

   it('should return 00:01', () => {
       const minutes = 1;
       const expectedReturn = "00:01";

       expect(formatDuration(minutes)).toBe(expectedReturn);
   });

   it("should return 00:00 if parameter is incorrect", () => {
       const parameter = -120;
       const expectedReturn = "00:00";

       expect(formatDuration(parameter)).toBe(expectedReturn);
   });

   it('should return 150:00', () => {
       const minutes = 9000;
       const expectedReturn = "150:00";

       expect(formatDuration(minutes)).toBe(expectedReturn);
   });

   it('should return >150:00 if duration is more than 9000', () => {
       const minutes = 9001;
       const expectedReturn = ">150:00";

       expect(formatDuration(minutes)).toBe(expectedReturn);
   });

   it('should work correctly with long int', () => {
       const minutes = Number.MAX_SAFE_INTEGER;
       const expectedReturn = ">150:00";

       expect(formatDuration(minutes)).toBe(expectedReturn);
   });

   it('should work correctly with float numbers', () => {
       const minutes = 15.5;
       const expectedReturn = "00:15";

       expect(formatDuration(minutes)).toBe(expectedReturn);
   })
});