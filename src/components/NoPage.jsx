import React from 'react'
import { Link } from 'react-router-dom'

function NoPage() {
  return (
    <>
    <div>No page found</div>
   <Link to='/'> <h1>go back to home page</h1></Link>
    </>
  )
}

export default NoPage