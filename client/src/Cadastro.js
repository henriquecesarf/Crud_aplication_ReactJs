import "./App.css";
import React, { useState } from 'react';
import { Redirect } from "react-router";
import Axios from 'axios';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';



const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));


function Cadastro() {
    const [values, setValues] = useState();
    const classes = useStyles();


    const handleClickButton = () => {
        Axios.post("http://localhost:3001/LogRegister", {
            name: values.name,
            email: values.email,
            password: values.password,
        }).then((response) => {
            console.log(response.status)
           

        });
    }

    const handleaddValues = (value) => {
        setValues((prevValues) => ({

            ...prevValues,
            [value.target.name]: value.target.value,

        }));

    };

    return (

        <div className="app-container" >

            <div className="register-container">
                <h1 className="register-title">Cadastro</h1>
                <form>
                    <input
                        type="text"
                        placeholder="Nome"
                        name="name"
                        className="register-input"
                        onChange={handleaddValues}
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        className="register-input"
                        onChange={handleaddValues}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        name="password"
                        className="register-input"
                        onChange={handleaddValues}
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
                        
                    </div>


                </form>

            </div>
        </div>
    );
}

export default Cadastro;