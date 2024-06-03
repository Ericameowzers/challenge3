// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employeesArray = [];
// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  
  // get the employees from the html form
  const employeeForm = document.querySelector('#add-employees-form');
  // get the first name
  const firstName = employeeForm.querySelector(`#first-name`).value;
  // get the last name
  const lastName = employeeForm.querySelector(`#last-name`).value;
  // get the salary
  const salary = employeeForm.querySelector(`#salary`).value;

  const employee = {
    firstName: firstName,
    lastName: lastName,
    salary: salary
  }
  employeesArray.push(employee)
  // return the employees array
  return employeesArray;
}


// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  let averageSalary = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    averageSalary += parseInt(employeesArray[i].salary);
  }
  averageSalary = averageSalary / employeesArray.length;
  // show the average salary in the html
  const averageSalaryDisplay = document.querySelector('#average-salary');
  averageSalaryDisplay.textContent = averageSalary;
  return averageSalary;
}


const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  // get a random number
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  // get the random employee
  const randomEmployee = employeesArray[randomIndex];
  // show the random employee in the html
  const randomEmployeeDisplay = document.querySelector('#random-employee');
  console.log(randomEmployee.firstName + ' ' + randomEmployee.lastName)
  randomEmployeeDisplay.textContent = randomEmployee.firstName + ' ' + randomEmployee.lastName + ' ' + randomEmployee.salary;
  return randomEmployee;
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];
  
    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
