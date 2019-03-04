import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

const landingPage = {
  "header" : {"id": 1, "type": "header", "content": "Edwin Dela"}
}

const moveHeader = keyframes`
0% { 
  color: rgba(255,255,255,0.3); 
  left: 0;
}
25% { 
  color: rgba(255,255,255,0.5); 
}
50% { 
  color: rgba(255,255,255,0.7);  
  left: 20px;
}
75% { 
  color: rgba(255,255,255,0.5); 
}
100% { 
  color: rgba(255,255,255,0.3);  
  left: 30px;
}
`
const LandingBody = styled.div`
  padding: 3% 0;
  font-size: 2em;
  color: white;
  min-height: 900px;
  font-family: 'PT Sans Narrow', sans-serif;
  text-align: center;
  background-color: rgba(29,30,40,0.3);
  animation: ${moveHeader} linear 5s infinite;
  -webkit-animation: ${moveHeader} linear 5s infinite;
`

const LandingHeader = styled.div`
font-size: 1.4em;
color: white;
margin: 0;
padding: 0;
font-family: 'PT Sans Narrow', sans-serif;
animation: ${moveHeader} linear 5s infinite;
-webkit-animation: ${moveHeader} linear 5s infinite;
`


export default class Landing extends Component {
  render() {
    return (
      <LandingBody>
        <header><h1>{landingPage.header.content}</h1></header>
        <section>
          <LandingHeader>
            <h4>Welcome To My Page</h4>
          </LandingHeader>
          <hr />
          <div>
            <p>It's a work in progress</p>
          </div>
        </section>
      </LandingBody>
    )
  }
}