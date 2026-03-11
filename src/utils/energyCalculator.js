// Utility functions for energy calculations

/**
 * Calculate Energy in Joules
 * @param {number} power - Power in Watts
 * @param {number} time - Time in seconds
 * @returns {number} Energy in Joules
 */
function calculateEnergy(power, time) {
    return power * time;
}

/**
 * Convert Kilowatt-hours to Joules
 * @param {number} kWh - Energy in kilowatt-hours
 * @returns {number} Energy in Joules
 */
function kWhToJoules(kWh) {
    return kWh * 3.6e6; // 1 kWh = 3.6 million Joules
}

/**
 * Calculate the cost of energy consumed
 * @param {number} energyJoules - Energy in Joules
 * @param {number} costPerkWh - Cost per kilowatt-hour
 * @returns {number} Total cost
 */
function calculateEnergyCost(energyJoules, costPerkWh) {
    const energykWh = energyJoules / 3.6e6;
    return energykWh * costPerkWh;
}

module.exports = {
    calculateEnergy,
    kWhToJoules,
    calculateEnergyCost
};