import "./App.css";
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Cards from "./components/cards/Cards";
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(2),
    },
}));


function Registro() {
    const [values, setValues] = useState();
    const [listfunc, setlistfunc] = useState();
    const classes = useStyles();
    // const [success, setSuccess] = useState(false);




    const handleClickButton = () => {
        Axios.post("http://192.168.1.25:3001/register", {
            name: values.name,
            email: values.email,
            number: values.number,
        }).then((response) => {
            if(values.name === null){
              
            }

            if(response.status=== 200){
                                Axios.get("http://192.168.1.25:3001/getCards").then((response) => {
                    setlistfunc(response.data);
                    
                });      
               
                alert("Cadastro efetuado com sucesso")
               
            } else  {alert("ERROR! Cadastro não efetuado")}
        });
        

    }

    useEffect(() => {
        Axios.get("http://192.168.1.25:3001/getCards").then((response) => {
            setlistfunc(response.data);
        });
    }, []);



    const handleaddValues = (value) => {
        setValues((prevValues) => ({

            ...prevValues,
            [value.target.name]: value.target.value,
        }));

    };

    return (
        <>

            {/* <Snackbar open={success} autoHideDuration={6000} onClose={() => setSuccess(false)}>
                <Alert severity="success">
                    Atualizado com sucesso.
                </Alert>
            </Snackbar>

            <Snackbar open={error} autoHideDuration={6000} onClose={() => setError('')}>
                <Alert severity="error">
                    {error}
                </Alert>
            </Snackbar> */}
            <div className="app-container" >

                <div className="register-container">
                    <h1 className="register-title"> CRUD APPLICATION </h1>

                    <input
                        type="text"
                        name="name"
                        placeholder="Nome"
                        className="register-input"
                        onChange={handleaddValues}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        className="register-input"
                        onChange={handleaddValues}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Número"
                        name="number"
                        className="register-input"
                        onChange={handleaddValues}
                        required
                    />
                    <div className="app-container-button-login">
                       
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleClickButton}
                            size="large"
                            className={classes.button}
                            startIcon={<SaveIcon />}
                        >
                            Cadastrar
                        </Button>
                        <Link
                            href="/"
                            underline="hover"


                        >
                            Voltar
                        </Link>


                    </div>
                    
                    
                </div>          


            </div>
                <div className="register-table-container">
                    {
                        typeof listfunc !== "undefined" && listfunc.map((value) => {
                            return (

                                <Cards
                                    key={value.id}
                                    listfunc={listfunc}
                                    setlistfunc={setlistfunc}
                                    id={value.id}
                                    name={value.funcNome}
                                    email={value.funcEmail}
                                    number={value.funciNumero}

                                >

                                </Cards>
                            );
                        })
                    }
            </div>
        </>
    );
}

export default Registro;