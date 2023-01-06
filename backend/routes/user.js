const express = require("express");
const router=express.Router();

const {reportAbuse,contact}=require('../controllers/user');

router.route('/reportAbuse').post(reportAbuse);
router.route('/contact').post(contact);

module.exports=router;
