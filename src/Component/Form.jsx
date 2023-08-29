import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
    >
      <h1  style={{backgroundColor:"black",color:"white",marginLeft:"30%"}}>REGISTRATION FORM</h1>
      <TextField id="outlined-basic" label="Name" variant="outlined" /><br></br>
      <TextField id="outlined-basic" label="Email" variant="outlined" /><br></br>
      <TextField id="outlined-basic" label="Address" variant="outlined" /><br></br>
      <Button variant="contained" endIcon={<SendIcon />} color="primary" >Submit</Button>
    </Box>
  );
}
