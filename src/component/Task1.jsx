import React from 'react'

const Task1 = () => {
    const Member = ["Ayanaw","Hermela","Etsub","Ermias"];
  return (
    <div>
        <h1>Group 3 Members</h1>
      <ul>
        
            {Member.map((value, index)=>(
                <li key={index}>{value}</li>
            ))}
        
      </ul>
    </div>
  )
}

export default Task1
