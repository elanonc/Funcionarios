const axios = require('axios');
const pool = require("../db/db");

const seedData = async () => {
    const url = "https://economia.awesomeapi.com.br/last/USD-BRL";
    const { data } = await axios.get(url);
    const cotação = data.USDBRL.bid;
    
    console.log("Data.USDBRL.bid retorna: " + cotação)
    
    return cotação;
};

const convertSalary = (employee, usd) => {
    employee.forEach( (item) => {
        item.salary = (item.salary / usd ).toLocaleString("pt-BR", { style: "currency", currency: "BRL" }); 
    })
};

const getAllEmployees = async (request, response, next) => {
    try {
        const result = await pool.query("SELECT * FROM employees");

        const usd = await seedData();
        convertSalary(result.rows, usd);
    
        return response.json(result.rows);
    } catch (error) {
        next(error);
    }
};

const getEmployee = async (request, response, next) => {
    try {
        const { id } = request.params;
        const result = await pool.query("SELECT * FROM employees WHERE id = $1", [id]);
        
        const usd = await seedData();
        convertSalary(result.rows, usd);
        
        if (result.rows.length === 0) {
            return response.status(400).json({ error: "Employee not found"});
        }
        
        return response.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

const createEmployee = async (request, response, next) => {
    try {
        const { name, salary, age, role, email } = request.body;
        
        const result = await pool.query(
            "INSERT INTO employees (name, salary, age, role, email) VALUES ($1, $2, $3, $4, $5) RETURNING *", 
            [ name, salary, age, role, email ]);

        response.status(201).json(result.rows[0]);
    } catch(error){
        next(error);
    }
};

const removeEmployee = async (request, response, next) => {
    try {
        const { id } = request.params;

        const result = await pool.query("DELETE FROM employees WHERE id = $1", [id]);

        if (result.rowCount === 0) {
            return response.status(400).json( { error: "Emplyee not found"} );
        }

        return response.sendStatus(200);
    } catch(error) {
        next(error);
    }
};

const updateEmployee = async (request, response, next) => {
    try {
        const { id } = request.params;
        const { name, salary, age, role, email } = request.body;
        
        const result = await pool.query(
            "UPDATE employees SET name = $1, salary = $2, age = $3, role = $4, email = $5 WHERE id = $6 RETURNING * ", 
            [name, salary, age, role, email, id]);
        
        if (result.rows.length === 0 ) {
            return response.status(400).json( { error: "Employee not found" } );
        }

        return response.status(201).json(result.rows[0]);
    } catch(error) {
        next(error);
    }
};

module.exports = {
    getAllEmployees,
    getEmployee,
    createEmployee,
    removeEmployee,
    updateEmployee
};