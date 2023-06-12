import { useState } from "react";
import { Button, TextField, Switch, FormGroup, FormControlLabel } from "@mui/material";

const FormSignUp = () => {

    const [name, setName] = useState('OTILIO');

    return <form>
    
        <TextField id='name' label='Nombre' variant="outlined" fullWidth margin="normal"
        onChange={(e)=> {console.log(name); setName(e.target.value);}}
        value={name}/>
        <TextField id='lastName' label='Apellidos' variant="outlined" fullWidth margin="normal"/>
        <TextField id='email' label='Email' variant="outlined" fullWidth margin="normal"/>
   
        <FormGroup>
        <FormControlLabel control={<Switch defaultChecked />} label='Promociones'/>
        <FormControlLabel control={<Switch defaultChecked />} label='Novedades'/>
        </FormGroup>

        <Button variant="contained">Registrarse</Button>
    </form>
}

export default FormSignUp