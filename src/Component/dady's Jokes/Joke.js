import React, { Component } from 'react'
import "./joke.css"

export default class Joke extends Component {
  constructor(props){
    super(props)
    this.imojes = this.imojes.bind(this)
  }
  
  imojes(){
     if(this.props.vote < -7){
      return "em em-face_vomiting"
    }
    else if(this.props.vote < -5){
      return "em em-confounded"
    }else if(this.props.vote < 0){
      return "em em-confused"
    }else if(this.props.vote < 4){
      return "em em-grinning"
    } else if(this.props.vote < 8){
      return "em em-grin"
    }
    else{
      return "em em-joy"}
    
  }
  render() {
    return (
      <div className='joke'>
        <div className='votebar'>
          
        <i class="fa-sharp fa-solid fa-up-long up"  onClick={this.props.upVote}></i>
        <span>{this.props.vote}</span>
        <i class="fa-sharp fa-solid fa-down-long down" onClick={this.props.downVote}></i>
        </div>


        <div className='text'>{this.props.text}</div>
        <div className='imoji'>
          
             <i class={this.imojes()} style={{color:"yellow"}}></i>
        </div>
      </div>
    )
  }
}

