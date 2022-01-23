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


function Home() {
    const [values, setValues] = useState();
    const classes = useStyles();


    const handleClickButton = () => {
        Axios.post("http://localhost:3001/Login", {
            email: values.email,
            password: values.password,
        }).then((response) => {
            console.log("res", response)
            if(response.status === 200){
               
                window.location.replace("./Registro")                         
                
            } else if (response.status === 404)
                    alert('usuário não encontrado')
              console.log("alerta")
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
                <h1 className="register-title"> Login </h1>
                <form>
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
                            Login
                        </Button>
                        <Link
                            href="/Cadastro"
                            underline="hover"


                        >
                            Se ainda não é cadastrado, clique aqui!!!
                        </Link>
                    </div>

                    
                </form>
                
            </div>
        </div>
    );
}

export default Home;