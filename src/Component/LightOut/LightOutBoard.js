import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Cell from './Cell'
import "./lightOut.css"

export default class LightOutBoard extends Component {
    static defaultProps = {
        nrows:5,
        ncols:5,
        chanceLightStartOn:0.25
    }
    constructor(props){
        super(props)

        this.state ={hasWon:false,
                    board:this.createBord()}


         this.createBord = this.createBord.bind(this) 
                  
    }
    createBord(){
        let board = []
        for(let y=0 ; y < this.props.nrows; y++){
            let row =[]
                for(let x=0 ; x < this.props.ncols; x++){
                    row.push(Math.random() < this.props.chanceLightStartOn)
                }
            board.push(row)    
        }
        //pakaaaaa
        return board;
    }
    cellSate(coord,x,y){
        let board = this.state.board
        let {nrows,ncols} = this.props
        
        
        
        console.log(x,y,"here")
        console.log([y,x])
        function ex(y,x) {
        // i find mistake here if I rander without if because x+1 sometimes will equal 5 and the cpu will not happy for that
            if (y >= 0 && y < nrows && x >= 0 && x < ncols ){

                board[y][x]=!board[y][x]
            }
                
            }
        
            ex(y,x);
            ex(y+1,x);
            ex(y,x+1);
            ex(y-1,x);
            ex(y,x-1);
    
            
        
            let Won = board.every(row => row.every(cell => cell ===false))
            
            
        this.setState({
            hasWon: Won,
            board: board
        })

    }
    
  render() {
    if(this.state.hasWon){
        return <div><span className='orang'>You</span><span className='blue'>Win</span> </div>
    }
    let cell = [];
    for(let y=0 ; y < this.props.nrows; y++){
        let row =[]
        
                for(let x=0 ; x < this.props.ncols; x++){
                    let ey22 = y
                    let ex22 = x
                   let coord = `${y}-${x}`
                    row.push(<Cell  cellSate={()=>this.cellSate(coord,ex22,ey22)} key={coord} isLit={this.state.board[y][x]}/>)
                }
            cell.push(<tr key={y}>{row}</tr>)
    }
        


    return (

        <div className='lightOut'>
            
            
            <div className='container'>
            <div className='title'>
            <Link to="/" ><button>Back To Menu</button></Link>
                <div className='orang'>Lights</div>
                <div className='blue'>out</div>
            </div>
            <div>
                 <table>
                   <tbody>
                
                     {cell}
                 </tbody>


                </table>
          </div>
        </div>
        </div>
        
       
      

    )
  }
}
