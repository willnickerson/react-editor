import React from 'react';

const Color = ({color, children, ...props}) => {
  return (
    <span style={{ color }}>
      {children}
    </span>
  )
}

const Opacity = ({opacity, children, ...props }) => {
  return (
    <span style={{ opacity }}>
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

const TextBox = ({ text, color, opacity, bold, italic, ...props }) => {
  return (
    <div>
      <Bold bold={ bold }>
        <Italic italic={ italic }>
          <Color color={ color }>
            <Opacity opacity={ opacity }>
              { text }
            </Opacity>
          </Color>
        </Italic>
      </Bold>
    </div>
  )
}

export default TextBox