import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

const landingPage = {
  "header" : {"id": 1, "type": "header", "content": "Welcome to my page!"}
}

const moveHeader = keyframes`
0% { 
  color: rgba(255,255,255,0.3); 
  font-size: 2.3em;
}
25% { 
  color: rgba(255,255,255,0.5); 
}
50% { 
  color: rgba(255,255,255,0.7); 
  font-size: 2.5em;
}
75% { 
  color: rgba(255,255,255,0.5); 
}
100% { 
  color: rgba(255,255,255,0.3); 
  font-size: 2.3em;
}
`
const LandingStyle = styled.div`
  font-size: 2.4em;
  color: white;
  padding: 20%;
  text-align: center;
  background-color: rgba(29,30,40,0.3);
  animation: ${moveHeader} linear 5s infinite;
  -webkit-animation: ${moveHeader} linear 5s infinite;
`

export default class Landing extends Component {
  render() {
    return (
      <LandingStyle>
        <header><h1>{landingPage.header.content}</h1></header>
      </LandingStyle>
    )
  }
}