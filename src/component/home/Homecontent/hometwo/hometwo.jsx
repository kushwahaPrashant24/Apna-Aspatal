import React from 'react';
import "./hometwo.scss";
import Infocard from './infocard';


function hometwo  () {
  return (
    <div id='hometwo'>
      <h1>What We Do</h1>
      
      <p>We bring healthcare to your convenience, offering a comprehensive range of on-demand medical services tailored to <br></br>your needs. Our platform allows you to connect with experienced online doctors who provide expert<br></br> medical advice, issue online prescriptions, and offer quick refills whenever you <br></br>require them.</p>



      <div id='info-card'>

      <Infocard
          title="Emergency Care"
          description="Our Emergency Care service is designed to be your reliable support
            in critical situations. Whether it's a sudden illness, injury, or
            any medical concern that requires immediate attention, our team of
            dedicated healthcare professionals is available 24/7 to provide
            prompt and efficient care."
        />

<Infocard
          title="Heart Disease"
          description="Our team of experienced cardiologists and medical experts use
            state-of-the-art technology to assess your cardiovascular health and
            design personalized treatment plans. From comprehensive screenings
            to advanced interventions, we are committed to helping you maintain
            a healthy heart and lead a fulfilling life."
          
        />

<Infocard
          title="Dental Care"
          description="Smile with confidence as our Dental Care services cater to all your
            oral health needs. Our skilled dentists provide a wide range of
            treatments, from routine check-ups and cleanings to cosmetic
            procedures and restorative treatments."
          
        />



      </div>
    </div>

    
  
  )
}

export default hometwo;
