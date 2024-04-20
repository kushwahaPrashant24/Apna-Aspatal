import React from "react";
import  Data from "./Data";
import DoctorCard from "./DoctorCard";
import "./Doctordata.scss";


function createCards(Doct) {
    return <DoctorCard 
        img= {Doct.img}
        key= {Doct.id}
        name= {Doct.name} 
        specialization= {Doct.specialization}
        review= {Doct.review}
    />
}


function DoctorData() {
    console.log(Data);
    return <div id="DoctorData">
     {Data.map(createCards)}
    </div>
}

export default DoctorData;