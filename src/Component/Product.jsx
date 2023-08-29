import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function MediaCard() {

    function Click(){
    }

  return (
    <Card sx={{ maxWidth: 350 }} style={{marginLeft:"34%"}}>
        <Button variant="outlined"  endIcon={<AddShoppingCartIcon/>}></Button>
      <CardMedia
        sx={{ height: 400 }}
        image="https://www.jbhifi.com.au/cdn/shop/products/622169-Product-0-I-638239542006359261_bbbff5bf-04fa-41bf-8483-6bce7767ee3e_1024x1024.jpg"/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">Samsung s23</Typography>
        <Typography variant="body2">Price ₹94,999 </Typography>
        <hr></hr>
        <h4>Product discription</h4>
        <p>Pattern Name: Samsung Galaxy S22 Ultra 5G</p>
        <p>RAM : 12GB</p>
        <p>ROM : 256GB</p>
        <p>Operating System : Android 12.0</p>
        
      </CardContent>
    </Card>
  );
}
