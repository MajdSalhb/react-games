import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./cards.css"


export default class Card extends Component {
  render() {
    return (
      
       <div className='card'>
        <div className='card-header'>
            <img src={this.props.img}/>
        </div>
        <div className='card-footer "btn-w"'>
            <Link to={this.props.link} ><button>{this.props.name}</button></Link>
        </div>
      
    </div>
    
    )
  }
}


