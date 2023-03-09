import React, { Component } from 'react'
import "./Cell.css"

export default class Cell extends Component {
    constructor(propos){
        super(propos)
        this.handleClick=this.handleClick.bind(this)
    }
   handleClick(){
       this.props.cellSate()
   }
  render() {
    let cellOffOrON ="cell" + (this.props.isLit ? "" : " cell-off")
    return (

      
      <td className={cellOffOrON} onClick={this.handleClick}/>
    )
  }
}
