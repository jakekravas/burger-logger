const express = require("express");

let router = express.Router();
let burger = require("../models/burger");

router.get("/", (req, res) => {
    burger.selectAll(function(data) {
        let hbsObject = {
            burgers: data
        };
        // console.log(hbsObject);
        res.render("index", hbsObject);
    })
});

router.post("/api/burgers", (req, res) => {
    burger.insertOne(["burger_name", "devoured"], [req.body.burgername, req.body.devoured], function(result) {
        res.json({id: result.insertId});
    })
})

module.exports = router;