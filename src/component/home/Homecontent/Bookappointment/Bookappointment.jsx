import React from "react";
import Doctorone from "../../../../Asset/doctor-book-appointment.png";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import "./Bookappointment.scss";

function Bookappointment() {
  return (
    <div id="ba">
      <div className="ba-section">
        <div className="ba-image-content">
          <img src={Doctorone} alt="Doctor Group" className="ba-image1" />
        </div>

        <div className="ba-text-content">
          <h3 className="ba-title">
            <span>Why Choose Health</span>
          </h3>
          <div id="ba-content">
          <p className="ba-description">
            Discover the reasons to choose Health Plus for your healthcare
            needs. Experience expert care, convenience, and personalized
            solutions, making your well-being our top priority. Join us on a
            journey to better health and a happier life.
          </p>

          <p className="ba-checks ba-check-first">Best Professional Doctors</p>
          <p className="ba-checks">Emergency Care</p>
          <p className="ba-checks">24/7 Support Live Chat</p>
          <p className="ba-checks ba-check-last">Enrollment Easy and Quick</p>
          </div> 
          <Stack direction="row" spacing={2}>
            <Button variant="contained">
              <Link
                to="/Appointment"
                style={{ textDecoration: "none", color: "inherit", }}
              >
                Book Appointment
              </Link>
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default Bookappointment;
