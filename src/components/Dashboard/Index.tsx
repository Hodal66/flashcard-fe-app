import React from 'react'
import {Link} from 'react-router-dom';
function Index() {
  return (
    <div>
      <h1>Dash board</h1>
      <div>
      <Link to="/">
        <button >Home</button>
      </Link>
      <Link to="/view-all-cards">
        <button >View All</button>
      </Link>

      <Link to="/create-card">
        <button >Create Card</button>
      </Link>
     

      </div>
     
    </div>
  )
}

export default Index
