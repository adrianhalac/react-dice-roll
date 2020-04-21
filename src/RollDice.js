import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
  constructor(props){
    super(props);
    this.state = {
      die1: 'one',
      die2: 'one',
      rolling: false
    }
    this.roll = this.roll.bind(this);
  }

  static defaultProps = {
    diceValues: [
      'one', 
      'two', 
      'three', 
      'four', 
      'five', 
      'six'
    ]
  }

  pickNumber(){
    let randNum = Math.floor(Math.random() * 6);
    return randNum;
  }

  roll(){
    let d1face = this.props.diceValues[this.pickNumber()];
    let d2face = this.props.diceValues[this.pickNumber()];
    this.setState({ die1: d1face, die2: d2face, rolling: true });

    setTimeout(() => {
      this.setState({rolling: false});
    }, 1000);
  }

  render(){
    return (
      <div className="RollDice">
        <div className="RollDice-dice">
          <Die face={this.state.die1} rolling={this.state.rolling}/>
          <Die face={this.state.die2} rolling={this.state.rolling}/>
        </div>
        <button onClick={this.roll} disabled={this.state.rolling}>
          {this.state.rolling ? 'Rolling...' : 'Roll Dice!'}
        </button>
      </div>
    );
  }
}

export default RollDice;