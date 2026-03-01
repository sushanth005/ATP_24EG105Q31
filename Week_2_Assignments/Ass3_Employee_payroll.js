const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

// 1. filter() IT employees
const itEmployees = employees.filter(emp => emp.department === "IT");

// 2. map() add netSalary with 10% bonus
const employeesWithBonus = employees.map(emp => ({
  ...emp,
  netSalary: emp.salary + emp.salary * 0.10
}));

// 3. reduce() total salary payout
const totalSalary = employees.reduce(
  (total, emp) => total + emp.salary,
  0
);

// 4. find() salary 30000
const salary30000 = employees.find(emp => emp.salary === 30000);

// 5. findIndex() Neha
const nehaIndex = employees.findIndex(emp => emp.name === "Neha");

console.log(itEmployees);
console.log(employeesWithBonus);
console.log(totalSalary);
console.log(salary30000);
console.log(nehaIndex);