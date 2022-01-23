import "./App.css";
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Cards from "./components/cards/Cards";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSave } from '@fortawesome/free-solid-svg-icons'

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
    const [listfunc, setlistfunc] = useState();
    const classes = useStyles();




    const handleClickButton = () => {
        Axios.post("http://localhost:3001/register", {
            name: values.name,
            email: values.email,
            number: values.number,
        }).then((response) => {
            if(response.status=== 200){
                Axios.get("http://localhost:3001/getCards").then((response) => {
                    setlistfunc(response.data);
                });
            }
        });


    }

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
        <>
            <div className="app-container" >

                <div className="register-container">
                    <h1 className="register-title"> CRUD APPLICATION </h1>

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
                        type="text"
                        placeholder="Número"
                        name="number"
                        className="register-input"
                        onChange={handleaddValues}
                    />

                    {/* <button
                        onClick={handleClickButton}
                        className="register-button"
                    >
                        Cadastrar
                        <FontAwesomeIcon icon={faSave} size="1x" />
                    </button> */}

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