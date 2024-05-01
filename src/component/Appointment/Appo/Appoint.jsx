import React from "react";

function Appoint() {
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
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default Appoint;
