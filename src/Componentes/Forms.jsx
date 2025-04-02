import React, { useState } from 'react'
import styles from './Forms.module.css' // importando o css do componente
const Forms = (props) => {
  const [nome, setNome] = useState(props ? props.nome: ""); // se props for verdadeiro, setNome recebe o valor de props.nome, caso contrario, setNome recebe uma string vazia
  const [email, setEmail] = useState(props ? props.email: "") // se props for verdadeiro, setEmail recebe o valor de props.email, caso contrario, setEmail recebe uma string vazia
  const [senha, setSenha] = useState(props ? props.senha: "")// se props for verdadeiro, setSenha recebe o valor de props.senha, caso contrario, setSenha recebe uma string vazia
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
            <input type="text" id="nome" placeholder='Digite seu nome...' onChange={handleName}
            value={nome} // aqui estou setando o valor do input com o valor do state
            // o value é o que vai aparecer no input, e o onChange é o que vai mudar o valor do state
            />

            {/* Label envolvendo o input */}
            <label htmlFor="">
                <span>email</span>
                <input type="email" name ="email" placeholder='Digite seu email...' onChange={(e) => {setEmail(e.target.value)}}
                value={email} />
            </label>
            <label htmlFor="senha">
                <span>Senha</span>
                <input type="password" name="senha" placeholder='Digite sua senha...' onChange={(e) => {setSenha(e.target.value)}} value={senha}/>
            </label>
            <input type="submit" value="Enviar" style={{ backgroundColor: "blue", color: "white"}}/>
        </form>
    </div>
  )
}

export default Forms