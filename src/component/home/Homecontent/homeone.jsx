import React from 'react';
import Doctor from "../../../Asset/Doctor.png"
import "./homeone.scss";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

function homeone () {
  return (
    <div id='homeone'>
        <div id='Heading'>
          <h1>
            Welcome to  <span><br></br>Apna Aspatal</span>
          </h1>
          <Stack direction="row" spacing={2}>
      <Button variant="contained"><Link to="/Appointment" style={{ textDecoration: 'none', color: 'inherit'}}>Book Appointment</Link></Button>
    </Stack>
        </div>
        <div id='img'><img src={Doctor} /></div>
    </div>
  )
}

export default homeone