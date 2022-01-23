import React from "react";
import "./Cards.css";
import FormDialog from "../dialog/dialogForm";

import {
    Button,
    Box,
    Card,
    CardActions,
    CardContent,
    Typography
} from '@material-ui/core';

export default function Cards(props) {
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
        
            <Box sx={{ maxWidth: 600, minWidth: 600, padding: 5 }}>
                <Card 
                    variant="outlined"
                    style={{ backgroundColor: "#e0e0e0"}}
                >
                    <CardContent>
                        <Typography variant="h3" component="div">
                            Nome: {props.name}
                        </Typography>
                        <Typography variant="h6" component="div">
                            Código: {props.id}
                        </Typography>
                        <Typography variant="body2">
                            <Typography variant="h6" component="div">
                                e-mail: {props.email}
                            </Typography>
                            <Typography variant="h6" component="div">
                                Telefone: {props.number}
                            </Typography>
                            
                            
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button 
                            size="small"
                            onClick={
                                () => setOpen(true)}
                        >
                                Editar
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        
        </>
    );
}


