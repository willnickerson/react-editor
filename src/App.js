import React, { Component } from 'react';
import './App.css';

import ValueEditor from './components/ValueEditor';
import ValueToggle from './components/ValueToggle';
import TextBox from './components/TextBox';


class App extends Component {
  state = {
    value: 'type your message',
    color: '#00F',
    opacity: 1,
    bold: true,
    italic: false
  }

  onTextChange = e => {
    this.setState({ value: e.target.value })
  }

  onColorChange = e => {
    this.setState({ color: e.target.value });
  }

  onOpacityChange = e => {
    this.setState({ opacity: e.target.value});
  }

  onBoldChange = e => {
    this.setState({ bold: !this.state.bold });
  }

  onItalicChange = e => {
    this.setState({ italic: !this.state.italic})
  }

  render() {
    return (
      <div className="App">
        <h2>React Editor</h2>
        
        <ValueEditor
          prop='value'
          value={this.state.value}
          onChange={this.onTextChange}
        />
        <ValueEditor
          prop='color'
          value={this.state.color}
          onChange={this.onColorChange}         
        />
        <div className="swatch" style={{ backgroundColor: this.state.color }}/>

        <ValueEditor
          prop='opacity'
          value={this.state.opacity}
          onChange={this.onOpacityChange}
        />
        <ValueToggle
          prop='bold'
          value={this.state.bold}
          onChange={this.onBoldChange}
        />
        <ValueToggle
          prop='italic'
          value={this.state.italic}
          onChange={this.onItalicChange}
        />
        <TextBox
          text={this.state.value}
          color={this.state.color}
          opacity={this.state.opacity}
          bold={this.state.bold}
          italic={this.state.italic}
        />
      </div>
    );
  }
}

export default App;
