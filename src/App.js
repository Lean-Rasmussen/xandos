import React, { Component } from 'react';
import './App.css';
 
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      player1:'0',
      player2:'X',
      currentTurn: '0',
      board:['','','','','','','','',''],
      winning:[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],
      winner: false,
    }
  }

    handleClick(index){
    if(this.state.board[index] === ''){
        this.legalmove(index)
        this.checkForWinner()
      }
  }

   legalmove(index){
      this.state.board[index] = this.state.currentTurn;
      this.setState({
      currentTurn:this.state.currentTurn === this.state.player1 ? this.state.player2 : this.state.player1,
    })
   }

   checkForWinner(){
    let board =this.state.board
    let winner = this.state.winning
    winner.find(function(win){
        if(board[win[0]] !== "" && board[win[1]] !== '' && board[win[2]] !== '' && board[win[0]] === board[win[1]] && board[win[1]] === board[win[2]]) {
          alert('we have a winner winner of a chicken dinner!!!')
        }
      })
  }

  newGame(){
    this.setState({
      player1:'0',
      player2:'X',
      currentTurn: '0',
      board:['','','','','','','','',''],
      winner: false,

    })
  }
 
  render() {
    return (
      <div className="App">
        <h1> Xandos </h1> 
        <p> Player 1 : {this.state.player1} </p>
        <p> Player 2 :  {this.state.player2}</p>
        <button onClick={()=> this.newGame()}>New Game</button>
        <div className='container'>
          {this.state.board.map((tile, index) =>{
            return <div onClick={() => this.handleClick(index)} className='square'>{tile}</div>
            })
          }
        </div>
      </div>
    );
  }
}
export default App;
