import React, { useState } from 'react'
import styles from './Forms.module.css' // importando o css do componente
const Forms = () => {
  const [nome, setNome] = useState()
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()
    // criando um state para o nome, email e senha
    const handleSubmit = (e) => {
        e.preventDefault(); // previne o comportamento padrão do form, que é recarregar a pagina
        console.log("Nome:", nome);
        console.log("Email:", email);
        console.log("Senha:", senha);
        // aqui poderia fazer um fetch para enviar os dados para o servidor
    }
    const handleName = (e) => {
        console.log(e.target.value); // aqui estou pegando o valor do input
        setNome(e.target.value); // setando o valor do input no state
    }
    return (
    <div >
        <h4>Forms</h4>
        <form className={styles.formulario} onSubmit={handleSubmit}>
            {/* Label froa do input, com htmlFor */}
            <label htmlFor="nome"> Nome :</label>
            <input type="text" id="nome" placeholder='Digite seu nome...' onChange={handleName}/>

            {/* Label envolvendo o input */}
            <label htmlFor="">
                <span>email</span>
                <input type="email" name ="email" placeholder='Digite seu email...' onChange={(e) => {setEmail(e.target.value)}} />
            </label>
            <label htmlFor="senha">
                <span>Senha</span>
                <input type="password" name="senha" placeholder='Digite sua senha...' onChange={(e) => {setSenha(e.target.value)}}/>
            </label>
            <input type="submit" value="Enviar" style={{ backgroundColor: "blue", color: "white"}}/>
        </form>
    </div>
  )
}

export default Forms