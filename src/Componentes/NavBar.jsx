import { NavLink } from 'react-router-dom'
import styles from './css/NavBar.module.css'
const NavBar = () => {
    return (
        <nav className={styles.navbar}>  
        <NavLink className={styles.link} to="/">
        Home</NavLink>
        <NavLink className={styles.link} to="/Login">
        Login</NavLink>
        <NavLink className={styles.link} to="/Cadastro">Cadastro</NavLink>
        <NavLink className={styles.link} to = "/sobre">
        Sobre</NavLink>
        <NavLink className={styles.link} to = "/Contato">
        Contato</NavLink>
      </nav>
      )
  
  
}

export default NavBar