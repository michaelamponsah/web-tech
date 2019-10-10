const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

// Login Handler
router.post("/login", (req, res) => {
    // console.log(req.body);
    // console.log("it worked");

    const {studentID, studentPIN} = req.body;
});
module.exports = router;

