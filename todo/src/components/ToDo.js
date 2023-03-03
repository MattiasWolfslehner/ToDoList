import React from 'react'

const ToDo = ({description,done}) => {
  return (
    <div>
        <h1>{description}</h1>
        <h1>{done}</h1>
    </div>
  )
}

export default ToDo