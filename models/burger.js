const orm = require("../config/orm");
const connection = require("../config/connection");

let burger = { 
    selectAll: function(cb){
        orm.selectAll("*", function(res) {
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb){
        // orm.insertOne("burgers", cols, vals, function(res) {
        orm.insertOne(cols, vals, function(res) {
            cb(res);
        });
    }
    // insertOne: function(burgerName, devoured, cb){
    //     orm.insertOne(burgerName, devoured, function(res) {
    //         cb(res);
    //     });
    // }
    // insertOne: function()
    // orm.insertOne("wfe", false),
    // orm.updateOne("burger_name", "BaconBurger", "devoured", true)
}

module.exports = burger;