import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

const landingPage = {
  "header" : {"id": 1, "type": "header", "content": "Welcome, We've Been Expecting You!"}
}

const moveHeader = keyframes`
0% { color: red; }
30% { color: white; }
60% { color: black; }
100% { color: purple; }
`
const LandingStyle = styled.div`
  font-size: 2.4em;
  color: white;
  padding: 17%;
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