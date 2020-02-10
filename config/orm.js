const connection = require("./connection");

function printQuestionMarks(num) {
    let arr = [];
  
    for (let i = 0; i < num; i++) {
        arr.push("?");
    }
  
    return arr.toString();
};

function objToSql(ob) {
    let arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (let key in ob) {
        let value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
            value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }
  
    // translate array of strings to a single comma-separated string
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
    insertOne: function(cols, vals, cb){

        // let queryString = `INSERT INTO burgers (${cols.toString()}) VALUES (?, ?)`;
        let queryString = `INSERT INTO burgers (${cols.toString()}) VALUES (?)`;
        connection.query(queryString, vals, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(table, objColVals, condition, cb){
        let queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        })

    }
    // updateOne: function(setCol, newVal, refCol, currentVal){
    //     let q = "UPDATE burgers SET ?? = ? WHERE ?? = ?";
    //     connection.query(q, [setCol, newVal, refCol, currentVal], (err, result) => {
    //         if (err) throw err;
    //         console.log(result);
    //     });
    // }
}

module.exports = orm;