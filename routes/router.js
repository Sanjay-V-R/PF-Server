const express = require('express')
const userController = require('../controllers/userController')
const projectController = require('../controllers/projectController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const multerMiddleware = require('../middlewares/multerMiddleware')

const router = new express.Router()

// register - http://localhost:3000/register
router.post('/register', userController.registerController)

// login - http://localhost:3000/login
router.post('/login', userController.loginController)

// add project
router.post('/project/add', jwtMiddleware, multerMiddleware.single('projectImg'), projectController.addProjectController)

// home project
router.get('/get-home-projects', projectController.getHomeProjects)

// all projects
router.get('/all-projects', jwtMiddleware, projectController.allProjectsController)

// user projects
router.get('/user-projects', jwtMiddleware, projectController.getUserProjectsController)

module.exports = router