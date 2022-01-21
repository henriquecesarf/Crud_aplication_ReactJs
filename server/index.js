const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");



app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
    const { name } = req.body;
    const { email } = req.body;
    const { number } = req.body;

    let sql = "INSERT INTO funciario ( funcNome, funcEmail, funciNumero) VALUES (?, ?, ?)";

    db.query(sql, [name, email, number], (err, result) => {
        console.log(err)
    });
});

app.delete("/delete/:id", (req, res) => {
    const { id } = req.params;
    let mysql = "DELETE FROM funciario WHERE id = ?";
    db.query(mysql, id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.get("/getCards", (req, res) => {
    let sql = "SELECT * from funciario ";
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result)
        }
    });
})

app.put("/edit", (req, res) => {
    const { id } = req.body;
    const { name } = req.body;
    const { email } = req.body;
    const { number } = req.body;

    let sql = "UPDATE funciario SET funcNome = ?, funcEmail = ?, funciNumero= ? WHERE id = ?"
    db.query(sql, [name, email, number, id], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
})
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "res_fun",

});


app.listen(3001, () => {

    console.log("rodando servidor");
});