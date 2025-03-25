import React from 'react'

function ShowUserName(props) {
    console.log(props);

  return (
    <div>
        <h1>O nome do usuario é : {props.name}</h1>
    </div>
  )
}

export default ShowUserName