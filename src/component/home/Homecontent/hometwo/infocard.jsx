import React from 'react'

function Infocard (props) {
  return (
    <div id='info'>
        <p className="info-card-title">{props.title}</p>
      <p className="info-card-description">{props.description}</p>
    </div>
  )
}

export default Infocard;