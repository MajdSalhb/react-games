import axios from 'axios'
import React, { Component } from 'react'
import Joke from "./Joke"
import {v4 as uuid} from 'uuid'
import JokeSidebar from "./JokeSidebar"
import "./jokeList.css"
import { Link } from 'react-router-dom'

export default class JokeList extends Component {
    static defaultProps ={
        numOfJokes:9
    }
    constructor(props){
        super(props)
        this.state ={

            jokes:JSON.parse(window.localStorage.getItem("jokes") || "[]"),
            
            loading:false,
           

        }
        
        this.seenJoke = new Set(this.state.jokes.map(j=>j.text))
        console.log(this.seenJoke)
        this.newJokes=this.newJokes.bind(this)
    }
    async componentDidMount(){
      if(this.state.jokes.length === 0){
        this.newJokes()
    }}
    upVote(id,delta){
      
      this.setState(st=>({
        jokes:st.jokes.map(j=>
          

          j.id === id ? {...j,vote:j.vote + delta} : j)
          

      }), 
      
     
      ()=> window.localStorage.setItem("jokes",JSON.stringify(this.state.jokes)))
     
      

      }
     async newJokes(){
      

   
        this.setState({
          loading:true
        })
        let allJokes =[]
        while(allJokes.length < this.props.numOfJokes){
            let jokes = await axios.get("https://icanhazdadjoke.com/",{headers:{Accept:"application/json"}})
            console.log(jokes)
         
            if(!this.seenJoke.has(jokes.data.joke)){
              allJokes.push({text:jokes.data.joke,vote:0,id:uuid()})
            }
            else{
              console.log("i have a repeating joke ")
              console.log(jokes.data.joke)
            }
            
            
        
        }
     
       
        this.setState(st=>({
          jokes:[...st.jokes,...allJokes],
          loading:false

      }))
        
       
      
       
      
      window.localStorage.setItem("jokes",JSON.stringify(this.state.jokes))  
      }

      
      

    
  render() {
    let ss = this.state.jokes.sort((a,b)=>b.vote - a.vote)
    
    let joke = ss.map(j=><Joke text={j.text} vote={j.vote} upVote={()=>this.upVote(j.id,1)} 
    downVote={()=>this.upVote(j.id,-1)}/>)

    return (
      this.state.loading ?
      <div className='jokes-container'>
        <div className='loading'>
          <h1>LAUGH WITH DADY'S JOKES</h1>
             <div><i className='fa-sharp fa-solid fa-face-laugh fa-spin'></i> </div>
          <p>loading <i class="fa-solid fa-spinner fa-spin"></i></p>
          
        </div>
      </div>
        :
        
      <div className='jokes-container'>
        <Link to="/" ><button>Back To Menu</button></Link>
        
        <div className='jokeList'>
        <div>
          <JokeSidebar newJokes={this.newJokes} />
        </div>
        <div className='jokes'>
          {joke}
        </div>
        </div> 
      </div> 
        
        
        
      
    )
  }
}
