const { Router, request } = require("express");

const UsersController = require("../controllers/UsersController");

const userRoutes = Router();

const usersController = new UsersController();
//Query params 
userRoutes.post("/", usersController.create);
userRoutes.put("/:id", usersController.update);


module.exports = userRoutes;