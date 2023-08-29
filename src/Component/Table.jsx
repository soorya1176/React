import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

export default function Tables() {
let Deletedetails=()=>{
  alert("You data has been deleted ")
}

  return (
<div className='asd'>
<table class="table">
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Email</th>
<th scope="col">Phone_No</th>
<th scope="col">Address</th>
<th scope="col">Action</th>

</tr>
</thead>
<tbody>
<tr>
<th scope="row">ismail</th>
<td>ismail@gmail.com</td>
<td>123456789</td>
<td>kalladka</td>
<td>
<button class="btn btn-info" data-bs-target="#edit" data-bs-toggle="modal">view</button> <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#view">Edit</button> <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#delete">Delete</button> </td>
</tr>
<tr>
<th scope="row">jeevan</th>
<td>jeevan@gmail.com</td>
<td>123456789</td>
<td>dubai</td>
<td>
<button  class="btn btn-info" type='button ' data-bs-target="#edit" data-bs-toggle="modal">View</button> <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#view">Edit</button> <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#delete">Delete</button> </td>
</tr>
<tr>
<th scope="row">Soorya</th>
<td>Soorya@gmail.com</td>
<td>1234567890</td>
<td>bc road</td>
<td>
<button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#edit">view
</button>  <button type="button"   class="btn btn-success" data-bs-toggle="modal" data-bs-target="#view">Edit
</button> <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#delete">Delete</button> </td>

</tr>
</tbody>
</table>
<div class="modal fade" id="edit" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body">

</div>
<div class="modal-footer">
<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
</div>
</div>
</div>
</div>

<div class="modal fade" id="delete" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body">
  Your Data Deleted  
</div>
<div class="modal-footer">
<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
</div>
</div>
</div>
</div>
<div class="modal fade" id="view" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div>
<Card  style={{marginReft:"10%"}}>
      <CardContent>
        <h3>EDIT FORM</h3>
        <TextField variant="outlined" label="Name" /><br></br>
        <TextField variant="outlined" label="Email" /><br></br>
        <TextField variant="outlined" label="Phone_No" /><br></br>
        <TextField variant="outlined" label="Address" /><br></br>
        <Button variant="contained" endIcon={<SendIcon />} color="primary" >Edit</Button>        

      </CardContent>
    </Card>
        </div>
<div class="modal-footer">
<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
</div>
</div>
</div>
</div>
</div>
)
}