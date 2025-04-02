import { useForm } from 'react-hook-form' // importando o hook useForm do react-hook-form
import styles from './Forms.module.css' // importando o css do componente
const NewForms = () => {
    const{
        register,
        handleSubmit,
        formState: { errors }, // aqui estou pegando o valor do input
        } = useForm() // aqui estou pegando o valor do input
    
    const onSubmit = (data) => {
        console.log("Dados: ",data); // aqui estou pegando o valor do input
    }
    const onError = (errors) => {
        console.log("Erros: ", errors); // aqui estou pegando o valor do input
    }


  return (
    <div>
         <h4>Forms</h4>
                <form className={styles.formulario} onSubmit={handleSubmit (onSubmit, onError)}>
                    {/* Label froa do input, com htmlFor */}
                    <label htmlFor="nome"> Nome :</label>
                    <input type="text" id="nome" placeholder='Digite seu nome...' {...register("nome", {required: "Nome obrigatorio", 
                    maxLength: 
                    {value: 20, message: "O nome não pode ter ate de 20 caracteres"},
                    minLength:
                    {value: 2, message:"O nome deve ter mais de 2 caracteres"},
                    pattern: {
                        value: /^[A-Za-z]+$/i,
                        message: "O nome só pode conter letras"
                    }
                })} // 

                    />
                         {errors.nome && <p className={styles.errors}>{errors.nome.message}</p>}        
                    {/* Label envolvendo o input */}
                    <label htmlFor="">
                        <span>email</span>
                        <input type="email" name ="email" placeholder='Digite seu email...'  {...register("email",{required: "Email invalido", pattern:
                        {
                             value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                        message: "Email invalido"
                        },
                        validate: (value) => value.includes("@") || "Email invalido"
                    })}
                        />
                        {errors.email && <p className={styles.errors}>{errors.email.message}</p>}
                    </label>
                    <label htmlFor="senha">
                        <span>Senha</span>
                        <input type="password" name="senha" placeholder='Digite sua senha...' {...register("senha", {
              required: "A senha é obrigatória",
              minLength: {
                value: 8,
                message: "A senha deve ter pelo menos 8 caracteres",
              },
              maxLength: {
                value: 20,
                message: "A senha deve ter menos de 20 caracteres",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial",
              },
            })}
                        />
                        {errors.senha && <p className={styles.errors}>{errors.senha.message}</p>}

                    </label>
                    <input type="submit" value="Enviar" style={{ backgroundColor: "blue", color: "white"}}/>
                </form>
    </div>
  )
}

export default NewForms