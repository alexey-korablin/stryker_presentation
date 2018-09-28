'use strict';

const apparently = require('../scripts/script');

describe('test describe', function () {
    it('test it', () => {
        const phrases = [
            'It was great and I have never been on live television before but sometimes I dont watch this.',
            'and',
            'apparently'
        ]
        const expectedResult = [
            'It was great and apparently I have never been on live television before but apparently sometimes I dont watch this.',
            'and apparently',
            'apparently'
        ]
        // console.log(apparently);
        phrases.forEach((item, i) => {
            console.log(item);
            expect(apparently(item)).toBe(expectedResult[i]);
        });
        // expect(1 > 0).toBe(true);
    })
});
