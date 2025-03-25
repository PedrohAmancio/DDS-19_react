import React from 'react'

const Time = ({nome, estado , posicao,campeao}) => {
  return (
    <div>
        <h1>Nome do time: {nome}</h1>
        <h2>Fica no estado: {estado}</h2>
        <h2>Está na posição : {posicao}</h2>
        {/*  // Se for verdadeiro exibe a mensagem */}
        {(campeao && <h3>Esse time é muito campeão</h3>)
            ||
             {/*  // Se não for verdadeiro exibe a mensagem */}
            (campeao || <h3>Esse time não é muito campeão</h3>)}
        
    </div>
  )
}

export default Time