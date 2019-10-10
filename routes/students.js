const express = require("express");
const router = express.Router();

// HallApplication model
const HallApplication = require('../models/HallApplication');

router.get("/", (req, res) => {
    res.send("Students page");
});
router.get("/residential-application", (req, res) => {
    res.render("residential-application-form");
});

router.get("/application-status", (req, res) => {
    res.render("residential-application-status");
});

// Hall Application Handler
router.post("/hall-application", (req, res) => {
    console.log(req.body);
    const {hall, hallBlock, roomNumber} = req.body;
    const newHallApplication  = new HallApplication({
        hall,
        hallBlock,
        roomNumber
    });
    console.log(newHallApplication);
});

module.exports = router;