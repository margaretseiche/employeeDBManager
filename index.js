const util = require("util");
const mysql = require("mysql");
const { prompt } = require("inquirer");
require("console.table");
var orm = require("./config/orm.js");



const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "employeesDB"
});

connection.connect();



mainScreen();

async function mainScreen() {
  const { choice } = await prompt([
    {
      type: "list",
      name: "choice",
      message: "Please select an action.",
      choices: [
        {
          name: "Add An Employee",
          value: "addEmployee"
        },
        {
          name: "Update An Employee",
          value: "updateEmployee"
        },
        {
          name: "View All Employees",
          value: "viewAllEmployees"
        },
        {
          name: "View All Employees By Department",
          value: "viewAllEmployeesByDept"
        },
        {
          name: "View All Employees By Role",
          value: "viewAllEmployeesByRole"
        }
      ]
    }
  ]);

  switch (choice) {
    case "addEmployee":
      addEmployee();
      return;
    case "updateEmployee":
      updateEmployee();
      return;
    case "viewAllEmployees":
      viewAllEmployees();
      return;
    case "viewAllEmployeesByDept":
      viewAllEmployeesByDept();
      return;
    case "viewAllEmployeesByRole":
      viewAllEmployeesByRole();
      return;
    default:
      return;
  }
}

function addEmployee() {
  connection.query("INSERT INTO employee SET ?", employee);
  console.log("addin' ye employee");
  console.log("\n");
  console.table(employee);
}

function updateEmployee() {
  console.log("updatin' ye employee");
}

function viewAllEmployees() {
  orm.select("employee");
  mainScreen();
}

function viewAllEmployeesByDept() {
  console.log("viewin' yer employees by depARRRRtment");
}

function viewAllEmployeesByRole() {
  console.log("viewin' yer employees by rrrrrole");
}
// * Add departments, roles, employees

// * View departments, roles, employees

// * Update employee roles