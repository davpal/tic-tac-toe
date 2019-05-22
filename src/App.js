import React from 'react';
import './App.css';
import Field from  './Field';

class App extends React.Component {
  state = {  
    board: Array(9).fill(null),
    player: 'x'
  }

  onClick = (key) => {
    console.log("key " + key);
    const tmpBoard = [...this.state.board];
    if(tmpBoard[key] !== null)
      return;
    
    tmpBoard[key] = this.state.player;
    this.setState({
      board: tmpBoard
    }, this.judge);
  }

  judge() {
    const won = this.checkWinner();
    console.log(won);
    if(won) {
      console.log("dupa");
      alert(this.state.player + " is winner!");
      this.newGame();
    }
    this.togglePlayer();
  }

  newGame() {
    this.setState({
      board: Array(9).fill(null),
      player: 'x'
    });
  }

  togglePlayer() {
    const p = this.state.player === 'x' ? 'o' : 'x';
    this.setState({
      player: p
    });
  }

  checkWinner() {
    console.log('checking...');
    const board = [...this.state.board];
    const player = this.state.player;

    console.log(board);

    for(let i = 0; i < 3; ++i) {
      if(board[i] === player && 
         board[i+3] === player &&
         board[i+6] === player)
        return true;
    }

    for(const i of [0,3,6]) {
      console.log(i);
      if(board[i] === player &&
         board[i+1] === player &&
         board[i+2] === player)
        return true;
    }

    if((board[0] === player &&
        board[4] === player &&
        board[8] === player) || 
        (board[2] === player &&
         board[4] === player &&
         board[6] === player))
      return true;

    return false;
  }

  render() {
    const table = [0,1,2].map((i) => {
      const row = [0,1,2].map((j) => {
        const key = i*3 + j;
        return <Field player={this.state.board[key]} click={() => this.onClick(key)} key={key}/>
      });
      return <tr key={i}>{row}</tr>;
    });

    return (
      <div className="App">
        <h1>Tic Tac Toe</h1>
        <table>
          <tbody>{table}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
