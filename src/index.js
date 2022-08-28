const express = require("express");
const morgan = require("morgan");

const employeesRoutes = require("./routes/employees.routes");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(employeesRoutes);

app.use((err, request, response, next) => {
    return response.status(500).json({
      message: err.message,
    });
});

app.listen(3000, () => console.log("Server is running on http://localhost:3000/"));