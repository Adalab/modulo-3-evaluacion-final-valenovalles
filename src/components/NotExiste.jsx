import React from 'react'
import { Link } from 'react-router-dom'

function NotExiste() {
  return (
    <div>

    <h2>Este personaje no existe</h2>
    <Link to="/">Volver </Link>
    
    </div>
  )
}

export default NotExiste