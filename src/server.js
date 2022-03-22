const express = require("express")
const app = express()
const port = process.env.PORT || 9000
const ejs = require("ejs")
const path = require("path")

app.use(express.static(__dirname + "/public"))

app.set("view engine" , "ejs")
app.set("views" , path.resolve(__dirname , "./views"))

const HomeController = require("./Controller/HomeController")
const UserController = require("./Controller/UserController")
const NotController = require("./Controller/notFoundController")
const loginController = require("./Controller/loginController")
const SignController = require("./Controller/SignController")
app.get("/" , HomeController.GET)
app.get("/login" , loginController.GET)
app.get("/Sign" , SignController.GET)
app.get("/:userName" , UserController.GET)
app.get("/*" , NotController.GET )
app.listen(port , console.log(port))