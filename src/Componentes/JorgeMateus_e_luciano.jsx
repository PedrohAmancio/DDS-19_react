import React from 'react'

const JorgeMateus_e_luciano = (props) => {
  return (
    <div>
        <h3>Nome do cantor: {props.nome}</h3>
        <h3>Estilo musical: {props.estiloMusica}</h3>
        
        {(props.premio && <h2>Esse é brabo </h2>)
            ||
        (props.premio || <h2>Esse é fraco </h2>)}
    </div>
  )
}

export default JorgeMateus_e_luciano