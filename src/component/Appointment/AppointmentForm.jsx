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
          <option value="Select Gender">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label>
          Contact no.:
          <input type="number" name="Contact no" />
        </label>
        <label>
          E-mail:
          <input type="char" name="E-mail" />
        </label>
        <textarea>Hello there, this is some text in a text area</textarea>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default AppointmentForm;
