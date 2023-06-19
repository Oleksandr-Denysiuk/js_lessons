// const minSalary = 500;
// const maxSalary = 5000;
// const emploees = 8;
// let totalSalary = 0;

// for (i = 1; i <= emploees; i += 1) {
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary
//   );

//   console.log(`Зарплата працівника номер ${i} - ${salary}.`);

//   totalSalary += salary;
// }

// console.log("Total salary: ", totalSalary);

const min = 0;
const max = 5;
let total = 0;

for (i = min; i <= max; i += 1) {
  //   console.log(i);

  if (i % 2 !== 0) {
    console.log("Не парне: ", i);
    continue;
  }
  console.log("Парне: ", i);
  total += i;
}
console.log("Total: ", total);
