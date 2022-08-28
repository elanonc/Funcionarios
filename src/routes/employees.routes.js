const { Router } = require("express");

const { getAllEmployees, getEmployee, createEmployee, removeEmployee, updateEmployee } = require("../controllers/employees.controller");

const router = Router();

router.get("/employees", getAllEmployees);
router.get("/employees/:id", getEmployee);
router.post("/employees", createEmployee);
router.delete("/employees/:id", removeEmployee);
router.put("/employees/:id", updateEmployee);

module.exports = router;