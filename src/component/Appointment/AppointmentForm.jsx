import React from "react";

function AppointmentForm() {
  return (
    <div>
      <form>
        <label>
          Name:
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
        <textarea>Hello there, this is some text in a text area</textarea>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default AppointmentForm;
