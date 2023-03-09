import React, { Component } from 'react'
import Card from './Card'
import img0 from "./images/7.jpg"
import img1 from "./images/8.webp"
import img2 from "./images/9.png"
import "./chooseGame.css"

export default class ChooseGame extends Component {
    constructor(props){
      super(props)
      this.state={
        cards:[
          {name:"Hangman",img:img0 , link:"/Hangman"},
          {name:"Dady's jokes",img:img1 , link:"/JokeList"},
          {name:"Light Out",img:img2 , link:"/LightOutBoard"},
          
      ]
      
    }
    }
  render() {
    const cards = this.state.cards.map((e)=><Card name={e.name} img={e.img} link={e.link}/>
    )
    return (
      <div className='games'>
        
        <div className='cards'>
        {cards}
        
        </div>
        <h1>Please Choose One</h1>
        
      </div>
    )
  }
}
