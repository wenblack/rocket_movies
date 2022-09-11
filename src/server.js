//Import Async Errors
require("express-async-errors");
const migrationsRun = require('./database/sqlite/migrations')
const AppError = require("./utils/AppError");
//import Express
const express = require("express");
//Routes of application:
const routes = require("./routes");
//Using express
migrationsRun();
const app = express();
app.use(express.json());
app.use(routes);
app.use((error, request, response, next)=>{
  if( error instanceof AppError){
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message
    })
  }
  console.error(error);

  return response.status(500).json({
    status:'error',
    message: 'Internal Server Error',
  })
})


//port to listen
const PORT = 3333;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
