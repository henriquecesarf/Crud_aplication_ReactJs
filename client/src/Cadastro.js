import "./App.css";
import React, { useState} from 'react';
import Axios from 'axios';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));


function Registro() {
    const [values, setValues] = useState();
    
    const classes = useStyles();




    const handleClickButton = () => {
        Axios.post("http://localhost:3001/LogRegister", {
            name: values.name,
            email: values.email,
            password: values.password,
        }).then((response) => {
            
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
                <h1 className="register-title"> Cadastro </h1>

                <input
                    type="text"
                    name="name"
                    placeholder="Nome"
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
                        
                        onClick={handleClickButton}
                        color="primary"
                        size="large"
                        className={classes.button}
                        startIcon={<SaveIcon />}
                    >
                        Cadastrar
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Registro;