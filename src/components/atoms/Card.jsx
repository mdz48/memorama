import React from 'react'
import './Card.css'

export default function Card(props) {
  return (
    <div id="card">
      <img src={props.img} alt={props.alt} state={props.state} name={props.name} />
    </div>
  )
}
