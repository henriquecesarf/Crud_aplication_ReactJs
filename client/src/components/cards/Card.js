import React from "react";
import "./Card.css";
import FormDialog from "../dialog/dialogForm";

export default function Card(props) {
    const [open, setOpen] = React.useState(false);

    return ( 
        <>
        <FormDialog 
            open = { open }
            setOpen = { setOpen }
            name = { props.name }
            email = { props.email }
            number = { props.number }
            listfunc = { props.listfunc }
            setlistfunc = { props.setlistfunc }
            id = { props.id }
        /> 
        <div 
            className = "card-container"
            onClick = {
            () => setOpen(true) } 
        >
            <h1 className = "card-title" > { props.name } </h1> 
            <p className = "card-id" > { props.id } </p>
          
            <p className = "card-email" > { props.email } </p> 
            <h3 className = "card-number" > Telefone: { props.number } </h3> 
        </div> 
        </>
    );
}