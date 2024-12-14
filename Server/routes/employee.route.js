const {registerEmployee,login} = require("../controller/employee/employee.controller");
const router = require("express").Router();
const {tokenVerify} = require("../middlewares/tokenVerification");


router.post("/empRegister", tokenVerify, registerEmployee);
router.post("/login",login);

module.exports = router;