import "./App.css";
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Card from "./components/cards/Card";
import { browserHistory} from 'react-router-dom';

import Registro from "./Registro";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));


function Home() {
    const [values, setValues] = useState();
    const [listfunc, setlistfunc] = useState();
    const classes = useStyles();


    useEffect(() => {
        Axios.get("http://localhost:3001/getCards").then((response) => {
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

        <div className="app-container" >

            <div className="register-container">
                <h1 className="register-title"> Login </h1>
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="register-input"
                    onChange={handleaddValues}
                />
                <input
                    type="text"
                    placeholder="Senha"
                    name="number"
                    className="register-input"
                    onChange={handleaddValues}
                />

              

                <Button
                    variant="contained"
                    href = "/Registro"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                >
                   Login
                </Button>
            </div>
        </div>
    );
}

export default Home;