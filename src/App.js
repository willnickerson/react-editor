import React, { Component } from 'react';
import './App.css';

const Color = ({color, children, ...props}) => {
  return (
    <span style={{ color }}>
      {children}
    </span>
  )
}

const Bold = ({bold, children, ...props}) => {
  let weight;
  bold ? weight = 'bold' : weight = 200

  return (
    <span style={{fontWeight: weight}}>{children}</span>
  ) 
}

const Italic = ({italic, children, ...props}) => {
  let fontStyle;
  italic ? fontStyle = 'italic' : fontStyle = 'normal';

  return (
    <span style={{ fontStyle }}>{ children }</span>
  )
}

const BoldEditor = ({bold, onChange, ...props}) => {
  return (
    <div>
      <label>Bold: </label>
      <input 
        type="checkbox"
        checked={bold}
        onChange={onChange}
      />
    </div>
  )
}

const ItalicEditor = ({italic, onChange, ...props}) => {
  return (
    <div>
      <label>Italic: </label>
      <input
        type="checkbox"
        checked={italic}
        onChange={onChange}
      />
    </div>
  )
}

const ColorEditor = ({color, onChange, ...props}) => {
  return (
    <div>
      <label>color: </label>
      <input
        type="value"
        value={color}
        onChange={onChange}
      />
      <div className="swatch" style={{backgroundColor: color}}/>
    </div>
  )
}

const Editor = ({value, onValueChange, ...props}) => {
  return (  
    <div>
      <label>message: </label>
      <input
        type="value"
        value={value}
        onChange={onValueChange}
      />
    </div>
  )
}

class App extends Component {
  state = {
    value: 'type your message',
    color: '#00F',
    bold: true,
    italic: false
  }

  onChange = e => {
    this.setState({ value: e.target.value })
  }

  onColorChange = e => {
    this.setState({ color: e.target.value });
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
        <Editor
          value={this.state.value}
          onValueChange={this.onChange}
        />
        <ColorEditor
          color={this.state.color}
          onChange={this.onColorChange}
        />
        <BoldEditor
          bold={this.state.bold}
          onChange={this.onBoldChange}
        />
        <ItalicEditor
          italic={this.state.italic}
          onChange={this.onItalicChange}
        />

        <Bold bold={this.state.bold}>
          <Italic italic={this.state.italic}>
            <Color color={this.state.color}>
              <div>
                {this.state.value}
              </div>
            </Color>
          </Italic>
        </Bold>
      </div>
    );
  }
}

export default App;
