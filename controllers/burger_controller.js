const express = require("express");

let router = express.Router();
let burger = require("../models/burger");

router.get("/", (req, res) => {
    burger.selectAll(function(data) {
        let hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    })
});

router.post("/api/burgers", (req, res) => {
    burger.insertOne(["burger_name"], [req.body.burgername], function(result) {
        res.json({id: result.insertId});
    })
});

router.put("/api/burgers/:id", (req, res) => {
    let condition = "id = " + req.params.id;

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})

module.exports = router;