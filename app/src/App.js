import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
      <div className="bigFrame">
      <h1 className="title">Calculator</h1>
      <div className="calcFrame">
        <NumberButtons/>
      </div>
      </div>
      </div>
    )
  }
}

export default App;

class NumberButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "0",
      operation: "",
      num1: "",
      num2: "",
      reset: true
    }
  }

  clickedNumber = (event)=> {
    if(this.state.reset) {
      if (!this.state.operation) {
        if (!this.state.num1) {
          this.setState({
            num1: event.target.value
          })
        } else {
          this.setState({
            num1: this.state.num1 + event.target.value
          })
        }
      } else {
        if (!this.state.num2) {
          this.setState({
            num2: event.target.value
          })
        } else {
          this.setState({
            num2: this.state.num2 + event.target.value
          })
        }
      }
    }
  }

  reset = (event)=> {
    this.setState({
      result: "0",
      operation: "",
      num1: "",
      num2: "",
      reset: true
    })
  }

  clickedOp = (event)=> {
    if(!this.state.operation && this.state.num1)
    this.setState({
      operation: event.target.value
    })
  }

  solve = (event)=> {
    if(this.state.num1 && this.state.num2 && this.state.operation) {
      if(this.state.operation == "+") {
        this.setState({
          result: Number(this.state.num1) + Number(this.state.num2)
        });
      } else if (this.state.operation == "-") {
        this.setState({
          result: Number(this.state.num1) - Number(this.state.num2)
        });
    } else if (this.state.operation == "*") {
      this.setState({
        result: Number(this.state.num1) * Number(this.state.num2)
      });
    } else if (this.state.operation == "/") {
    this.setState({
      result: Number(this.state.num1) / Number(this.state.num2)
    });
    }
    this.setState({
      reset: false
    })
    }
  }

  render() {
    return (
      <div className="calcFrame">
        <table className="buttonsTable">
          <tr>
            <td><button onClick={this.clickedNumber} value="1">1</button></td>
            <td><button onClick={this.clickedNumber} value="2">2</button></td>
            <td><button onClick={this.clickedNumber} value="3">3</button></td>
            <td id="result">{Number(this.state.result).toFixed(1)}</td>
          </tr>
          <tr>
            <td><button onClick={this.clickedNumber} value="4">4</button></td>
            <td><button onClick={this.clickedNumber} value="5">5</button></td>
            <td><button onClick={this.clickedNumber} value="6">6</button></td>
            <td><span>Input: {this.state.num1} {this.state.operation} {this.state.num2}</span></td>
          </tr>
          <tr>
            <td><button onClick={this.clickedNumber} value="7">7</button></td>
            <td><button onClick={this.clickedNumber} value="8">8</button></td>
            <td><button onClick={this.clickedNumber} value="9">9</button></td>
          </tr>
          <tr>
            <td><button onClick={this.clickedOp} value="+" className="opButton">+</button></td>
            <td><button onClick={this.clickedOp} value="-" className="opButton">-</button></td>
            <td><button onClick={this.solve}>=</button></td>
          </tr>
          <tr>
            <td><button onClick={this.clickedOp} value="*" className="opButton">*</button></td>
            <td><button onClick={this.clickedOp} value="/" className="opButton">/</button></td>
            <td><button onClick={this.reset}>C</button></td>
          </tr>
        </table>
      </div>
    );
  }
}