import "./App.css";
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Card from "./components/cards/Card";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'


function App() {
    const [values, setValues] = useState();
    const [listfunc, setlistfunc] = useState();




    const handleClickButton = () => {
        Axios.post("http://localhost:3001/register", {
            name: values.name,
            email: values.email,
            number: values.number,
        }).then(() => {

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
        
        <div className = "app-container" >
            
            <div className = "register-container">
                <h1 className = "register-title"> CRUD APPLICATION </h1>

                <input 
                    type = "text"
                    name = "name"
                    placeholder = "Nome"
                    className = "register-input"
                    onChange = { handleaddValues }
                /> 
                <input 
                    type = "text"
                    placeholder = "Email"
                    name = "email"
                    className = "register-input"
                    onChange = { handleaddValues }
                /> 
                <input 
                    type = "text"
                    placeholder = "Número"
                    name = "number"
                    className = "register-input"
                    onChange = { handleaddValues }
                />

                <button 
                    onClick = { handleClickButton }
                    className = "register-button" 
                >
                    Cadastrar 
                    <FontAwesomeIcon icon={faSave} size="1x" />
                </button> 
            </div>


            {
                typeof listfunc !== "undefined" && listfunc.map((value) => {
                    return ( 
                        <Card 
                            key = { value.id }
                            listfunc = { listfunc }
                            setlistfunc = { setlistfunc }
                            id = { value.id }
                            name = { value.funcNome }
                            email = { value.funcEmail }
                            number = { value.funciNumero }

                        >

                        </Card>
                    );
                })
            }


        </div>
    );
}

export default App;