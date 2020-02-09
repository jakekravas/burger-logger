const connection = require("./connection");

function printQuestionMarks(num) {
    let arr = [];
  
    for (let i = 0; i < num; i++) {
        arr.push("?");
    }
  
    return arr.toString();
}

let orm = {
    selectAll: function(whatToSelect, cb){
        let q = `SELECT ${whatToSelect} FROM burgers`;
        connection.query(q, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    // insertOne: function(table, cols, vals, cb){
    insertOne: function(cols, vals, cb){
        let queryString = "INSERT INTO burgers";

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
    // insertOne: function(burgerName, devoured, cb){
    //     let q = "INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)";
    //     connection.query(q, [burgerName, devoured], (err, result) => {
    //         if (err) throw err;
    //         cb(result);
    //     });
    // }
    // updateOne: function(setCol, newVal, refCol, currentVal){
    //     let q = "UPDATE burgers SET ?? = ? WHERE ?? = ?";
    //     connection.query(q, [setCol, newVal, refCol, currentVal], (err, result) => {
    //         if (err) throw err;
    //         console.log(result);
    //     });
    // }
}

module.exports = orm;