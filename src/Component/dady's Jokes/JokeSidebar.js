import React, { Component } from 'react'
import "./jokeSide.css"

export default class JokeSidebar extends Component {
  render() {
    return (
      <div>
        <button className='btn' onClick={this.props.newJokes}>NEW JOKES</button>
        <div className='jokeSidebar'>
        
          <h1><span>Dad</span>   Jokes</h1>
        
          
        <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg'/>
        <button onClick={this.props.newJokes}>NEW JOKES</button>
        
        </div>
      </div>
      
      
    )
  }
}
