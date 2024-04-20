import React from "react";
import "./Doctordata.scss";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';


function DoctorCard(props) {
    return <div id="Card">
         <div id="img"> <img  src={props.img}/></div>
         <div id="Data">
            <h2>{props.name}</h2>
            <h3>{props.specialization}</h3>
            <h3>{props.review}</h3>
            <Stack direction="row" spacing={2}>
      <Button variant="contained"><Link to="/Appointment" style={{ textDecoration: 'none', color: 'inherit'}}>Book Appointment</Link></Button>
    </Stack>
         </div>
    </div>
}

export default DoctorCard;