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
          <option value="Select Gender">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option selected value="Other">
              Other
            </option>
          </select>
        </label>
        <label>
        Contact Number:
          <input type="text" name="name" />
        </label>
        <label>
          E-mail:
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
