import { useState } from "react";
import { Button, TextField, Switch, FormGroup, FormControlLabel } from "@mui/material";

const FormSignUp = (props) => {

    const {handleSubmit} = props;

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [prom, setProm] = useState(true);
    const [nov, setNov] = useState(false);

    return <form onSubmit={(e) =>{
        e.preventDefault();
        handleSubmit({name, lastName, email, prom, nov});
    }}>
    
        <TextField id='name' label='Nombre' variant="outlined" fullWidth margin="normal"
        onChange={(e)=> {setName(e.target.value);}}
        value={name}/>
        <TextField id='lastName' label='Apellidos' variant="outlined" fullWidth margin="normal"
        onChange={(e)=> {setLastName(e.target.value);}}
        value={lastName}/>
        <TextField id='email' label='Email' variant="outlined" fullWidth margin="normal"
        onChange={(e)=> {setEmail(e.target.value);}}
        value={email}/>
   
        <FormGroup>
        <FormControlLabel control={<Switch checked={prom} onChange={(e) => setProm(e.target.checked)} />} label='Promociones'/>
        <FormControlLabel control={<Switch checked={nov} onChange={(e) => setNov(e.target.checked)} />} label='Novedades'/>
        </FormGroup>

        <Button variant="contained" type="submit">Registrarse</Button>
    </form>
}

export default FormSignUp