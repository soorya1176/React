import logo from './logo.svg';
import './App.css';
import './color.css';
import image from './wall.jpg';
import Demo  from './Component/Demo';
import BasicButtons from './Component/Button';
import { TextField } from '@mui/material';
import Card from './Component/Card';
import Product from './Component/Product';
import Form from './Component/Form';
import Bootstrap from './Component/Bootstrap';
import Modal from './Component/Modal';
import Navbar from './Component/Navbar';
import Mdb from './Component/Mdb';
import Table from './Component/Table';
import Arrowfuncion from './Component/Arrowfuncion'
import Variable from './Component/Variable';
import Arraymethod from './Component/Arraymethod';
import Tablefunction from './Component/Tablefunction'
import Explain from './Component/Explain';



function App() {

  let mystyle={
    backgroundColor:"yellow",
    color:"black",
    backgroundImage:`url(${image})`
  }

  let profile={
    color:"blue",
    

  }
  return (
    <div class="App">
     <h1 style={{color:"red",backgroundColor:"blue",}}>Hello world</h1>
     <h1 style={mystyle}>Good afternoon</h1>
     <img src={image}/>
     <h1 className="style">REACT</h1>
     <hr></hr>

     <div  style={{backgroundColor:"hwb(160 65% 0%)",width:"50%",marginLeft:"319px"}}>
     <h1 style={{backgroundColor:"orange"}}>PROFILE</h1>
     {/* <img src={soorya} style={{width:"130px"}}/> */}
     <br></br>
     <h1 style={profile}>Name  : SOORYA H</h1>
     <h1 style={profile}>Email : soorya0116@gmail.com</h1>
     <h1 style={profile}>Phone : 8123909476</h1>
     </div>
     <Demo/>
     <BasicButtons/>
     <TextField/>
     <Card/>
     <Product/>
     <Form/>
     <Bootstrap/>
     <Modal/>
     <Navbar/>
     <Mdb/>
     <Table/>
     <Arrowfuncion/>
     <Variable/>
     <Arraymethod/>
     {/* <Tablefunction/> */}
     <Explain/>
     </div>
  );
} 
export default App;
