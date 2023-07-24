// function dice(str, target) {
//     if (target == 0) {
//         console.log(str);
//     }

//     for (let i = 1; i <= 6 && i <= target; i++) {
//         dice(str + i, target - i);
//     }
// }

// dice('', 4);

// function diceArr(str, target) {
//     if (target == 0) {
//         return [str];
//     }
//     let list = [];
//     for (let i = 1; i <= 6 && i <= target; i++) {
//         list.push(...(diceArr(str + i, target - i) || []));
//     }
//     return list;
// }

// console.log(diceArr('', 4));

// function getPayrollDays(params) {
//     let result = 0;
//     let payrollPolicyMap = {
//         'daysOfMonthExceptWeeklyRestDaysAndHolidays': params.daysInMonth - (params.rest + params.holiday),
//         'daysOfMonthExceptWeeklyRestDays': params.daysInMonth - params.rest,
//         'daysOfMonth': params.daysInMonth,
//     }
//     result = payrollPolicyMap[params.payrollDaysPolicy];
//     return result;
// }