import React from "react";
import BasicDatePicker from "./Date.jsx"


function AppointmentForm() {
  return (
    <div id="AppointmentForm">
      <form>
        <label>
          Full Name:
          <input type="text" name="name" />
        </label>
        <label>
          Age:
          <input type="text" name="name" />
        </label>
        
        <label>
          Gender:
          <select>
          <option value="mango">Select Gender</option>
            <option value="grapefruit">Male</option>
            <option value="lime">Female</option>
            <option value="coconut">Other</option>
            
          </select>
          <input type="text" name="name" />
        </label>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        /**Appointment Details*/
      
        
        <textarea></textarea>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default AppointmentForm;
