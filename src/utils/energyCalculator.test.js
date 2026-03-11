// energyCalculator.test.js

const { calculateEnergy } = require('./energyCalculator');

describe('Energy Calculator Utilities', () => {
    test('calculates energy for given power and time', () => {
        const power = 100; // in watts
        const time = 3600; // in seconds (1 hour)
        const result = calculateEnergy(power, time);
        expect(result).toBe(360000); // Expected energy in Joules
    });

    test('returns 0 for 0 power', () => {
        const power = 0; // in watts
        const time = 3600; // in seconds (1 hour)
        const result = calculateEnergy(power, time);
        expect(result).toBe(0);
    });

    test('handles negative power input', () => {
        const power = -50; // negative power
        const time = 3600; // in seconds
        const result = calculateEnergy(power, time);
        expect(result).toBe(-180000);
    });
});