import React from 'react'

const Dashboard = (props) => {
  return (
    <div>
        <h1>{props.name ? `welcome ${props.name}`: "Login" }</h1>
    </div>
  )
}

export default Dashboard