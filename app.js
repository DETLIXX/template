const express = require("express")
const ejs = require("ejs");
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.json)

//Clean Router
const route = require("./")
app.use(route);


app.get('/', (req, res) => {

});
app.get('/', (req, res) => {

});

app.listen(process.env.PORT || 3000, () => {
    console.log(`App listening on port!`);
});