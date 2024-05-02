import React from "react";
import "./Appoint.scss";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function Appoint() {
  return (
    <div id="Appoint">
      <form>
      
        <label>
          <span>Name:</span>
          <input type="text" name="name"/>
        </label>
        <label>
          <span id="twp">Age:</span>
          <input type="text" name="name" />
        </label>
        <label>
          Gender:
          <select>
            <option value="Select Gender">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Male">Female</option>
            <option selected value="Other">
              Other
            </option>
          </select>
        </label>
        
         <label>
         Preferred Date :
         <input type="Date" name="Date" />
         </label>
         <label>
         Preferred Time :
         <input type="Time" name="Time" />
         </label>
         <label>
         Reason for Visit
          <textarea/>
        </label>
        <div id="button">
        <Stack direction="row" spacing={2}>
      <Button type="submit" value="Submit"  variant="contained">Submit</Button>
    </Stack>
    </div>
      </form>
    </div>
  );
}
export default Appoint;
