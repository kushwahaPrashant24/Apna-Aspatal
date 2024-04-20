import React from 'react'
import Homeone from './Homecontent/homeone/homeone'
import Hometwo from './Homecontent/hometwo/hometwo'
import Bookappointment from './Homecontent/Bookappointment/Bookappointment'
import Footer from '../footer/footer'


function Home  ()  {
  return (
    <div id='Home'>
     <section><Homeone /></section> 
     <section><Hometwo />
     <Bookappointment />
     <Footer />
     </section>
   
    </div>
  )
}

export default Home
