const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");



app.use(cors());
app.use(express.json());

app.post("/Login", (req, res) => {
    const { email } = req.body;
    const { password } = req.body;

    let sql = "select * from login where logEmail = ? and LogPass = ?";

    db.query(sql, [ email, password], function(err, results,fields){
        if(results.length>0){
            res.status(200).send("logado")
        } else {
            res.status(404).send("não logado")
        }
    });
});


app.post("/LogRegister", (req, res) => {
    const { name } = req.body;
    const { email } = req.body;
    const { password } = req.body;

    let sql = "INSERT INTO login ( logName, logEmail, LogPass) VALUES (?, ?, ?)";

    db.query(sql, [name, email, password], (err, result) => {
        if (results.length > 0) {
            res.status(200).send("Cadastro realizado com sucesso")
        } else {
            res.send("teste")
        }
        console.log(err)
    });
});

app.post("/register", (req, res) => {
    const { name } = req.body;
    const { email } = req.body;
    const { number } = req.body;

    let sql = "INSERT INTO funciario ( funcNome, funcEmail, funciNumero) VALUES (?, ?, ?)";

    db.query(sql, [name, email, number], (err, result) => {
        res.status(200).send("logado")
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