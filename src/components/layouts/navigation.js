import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const navItems = [
  { id: 0, title: 'Story', path: '/story' },
  { id: 1, title: 'Music', path: '/music' },
  { id: 2, title: 'Works', path: '/works' },
  { id: 2, title: 'Art', path: '/art' },
  { id: 2, title: 'Languages', path: '/languages' }
]

export default class Navigation extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}