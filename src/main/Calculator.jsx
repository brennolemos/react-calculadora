import React, { Component } from "react";
import "./Calculator.css";

import Button from "../components/Button";
import Display from "../components/Display";

export default class Calculator extends Component {
  clearMemory() {
    console.log("Limpar");
  }

  setOperation(operation) {
    console.log(operation);
  }

  addDigit(n) {
    console.log(n);
  }
  render() {
    const addDigit = n => this.addDigit(n);
    const setOperation = op => this.setOperation(op);
    return (
      <div className="calculator">
        <Display value={100}></Display>
        <Button label="AC" click={() => this.clearMemory()} triple />
        <Button label="/" click={(op) => this.setOperation(op)} operation />
        <Button label="7" click={(n)=> this.addDigit(n)} />
        <Button label="8" click={(n)=> this.addDigit(n)} />
        <Button label="9" click={(n)=> this.addDigit(n)} />
        <Button label="*" click={(op) => this.setOperation(op)} operation />
        <Button label="4" click={(n)=> this.addDigit(n)} />
        <Button label="5" click={(n)=> this.addDigit(n)} />
        <Button label="6" click={(n)=> this.addDigit(n)} />
        <Button label="-" click={(op) => this.setOperation(op)} operation />
        <Button label="1" click={(n)=> this.addDigit(n)} />
        <Button label="2" click={(n)=> this.addDigit(n)} />
        <Button label="3" click={(n)=> this.addDigit(n)} />
        <Button label="+" click={(op) => this.setOperation(op)} operation />
        <Button label="0" click={(n)=> this.addDigit(n)} double />
        <Button label="." click={(n)=> this.addDigit(n)} />
        <Button label="=" click={(op) => this.setOperation(op)} operation />
      </div>
    );
  }
}
