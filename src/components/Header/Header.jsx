import React from 'react'
import './Header.css'

export default function Header({ title }) {
  // destructuring assignment of "props"
  return <header className="Header">{title}</header>
}
