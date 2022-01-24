import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from '@material-ui/core/Button';
import Axios from "axios";
 
export default function FormDialog(props) {

    const [editValues, setEditValues] = useState({
        id: props.id,
        name: props.name,
        email: props.email,
        number: props.number,

    });
    const gripEdit = () => {
        Axios.put("http://192.168.1.25:3001/edit", {
            id: editValues.id,
            name: editValues.name,
            email: editValues.email,
            number: editValues.number,
        }).then((response) => {
            if (response.status === 200) {
                Axios.get("http://192.168.1.25:3001//getCards").then((response) => {
                    props.setListCard(
                        props.listCard.map((value) => {
                            return value.id === editValues.id ? {
                                id: editValues.id,
                                name: editValues.name,
                                email: editValues.email,
                                number: editValues.number,
                            } :
                                value;
                        })
                    );
                });
                

            }
           
        });
        handleClose();
    };

    const gripDelet = () => {
        Axios.delete(`http://192.168.1.25:3001/delete/${editValues.id}`);
        handleClose();
    }

    const handleClose = () => {
        props.setOpen(false);
        document.location.reload(true);
    };

    const gripChangesValues = value => {
        setEditValues((prevValues) => ({
            ...prevValues,
            [value.target.id]: value.target.value
        }))
    }


    return ( 
        <div>
        <Dialog open = { props.open }
        onClose = { handleClose }>
        <DialogTitle id = "form-dialog-title" > Editar Registro {props.name} </DialogTitle> 
        <DialogContent >
        <TextField disabled margin = "dense"
        id = "id"
        label = "id"
        defaultValue = { props.id }
        onChange = { gripChangesValues }
        type = "text"
        fullWidth />
        <TextField autoFocus margin = "dense"
        id = "name"
        label = "Nome do fucinário"
        defaultValue = { props.name }
        onChange = { gripChangesValues }
        type = "text"

        fullWidth />
        <TextField autoFocus margin = "dense"
        id = "number"
        label = "Número de telefone"
        defaultValue = { props.number }
        onChange = { gripChangesValues }
        type = "number"

        fullWidth />
        <TextField autoFocus margin = "dense"
        id = "email"
        label = "Email"
        defaultValue = { props.email }
        onChange = { gripChangesValues }
        type = "text"

        fullWidth />
        </DialogContent>
         <DialogActions >
        <Button onClick = { handleClose }
        color = "primary" >
        Cancel 
        </Button> 
        <Button onClick = { gripDelet }
        color = "primary" >
        Excluir 
        </Button> 
        <Button onClick = { gripEdit }
        color = "primary" >
        Salvar 
        </Button> 
        </DialogActions > 
        </Dialog>
         </div>
                                    
    );
}