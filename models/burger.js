const orm = require("../config/orm");

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
    },
    updateOne: function(ojbColVals, condition, cb) {
        orm.updateOne("burgers", ojbColVals, condition, function(res){
            cb(res)
        })
    }
}

module.exports = burger;