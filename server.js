const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
let PORT = process.env.PORT || 1022;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

let routes = require("./controllers/burger_controller");
app.use(routes);

app.listen(PORT, () => {
    console.log(`App up at http://localhost:${PORT}`);
});