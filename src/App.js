import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Hangman from "./Component/Hangman/Hangman"
import JokeList from "./Component/dady's Jokes/JokeList"
import ChooseGame from "./ChooseGame"
import LightOutBoard from "./Component/LightOut/LightOutBoard"








export default class extends Component {
  render() {
    return (
      
        <Routes>
          <Route exact path='/' element={<ChooseGame/>} />
          <Route exact path='/Hangman' element={<Hangman/>} />
          <Route exact path='/JokeList' element={<JokeList/>} />
          <Route exact path='/LightOutBoard' element={<LightOutBoard/>} />
        </Routes>
      
    
      
    )
  }
}
