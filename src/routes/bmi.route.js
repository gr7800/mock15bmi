const express = require("express");
const { CalculateBMI, GetCalculation } = require("../controller/bmi.controller");

const router = express.Router();

router.route("/calculatebmi").post(CalculateBMI);
router.route("/getcalculation").post(GetCalculation);


module.exports=router;