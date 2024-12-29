import React from 'react'

const Task3 = ({name, email, age, background}) => {
  return (
    <div style={{backgroundColor : background,maxWidth:"300px"}}>
      <p style={{fontSize:"20px",fontFamily: "fantasy"}}>My name is {name}</p>
      <p style={{fontSize:"20px"}}>i am {age} years old</p>
      <p>Email : {email}</p>
    </div>
  )
}

export default Task3
