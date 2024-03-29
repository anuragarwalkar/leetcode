/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
function canCompleteCircuit(gas, cost) {
    let total = 0;
    let tank = 0;
    let start = 0;

    for (let i = 0; i < gas.length; i++) {
        tank += gas[i] - cost[i];

        if (tank < 0) {
            total += tank;
            tank = 0;
            start = i + 1
        }
    }

    return tank + total >= 0 ? start : -1;
};
// console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]))
console.log(canCompleteCircuit([2,3,4], [3,4,3]))