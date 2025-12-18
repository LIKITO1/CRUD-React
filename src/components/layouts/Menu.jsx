import {Link} from "react-router-dom"
import styles from "./Menu.module.css"
function Menu(){
    return(
        <>
        <div className={`d-flex bg-dark gap-2 align-items-center justify-content-center d-sm-none`}>
        <div className={`d-grid w-75 gap-2 m-4 text-center`}>
        <div className="row gap-2">
        <Link to={"/home"} className={`${styles.link} text-light bg-primary rounded-2 p-1 fs-6 col`}>Home</Link>
        <Link to={"/create"} className={`${styles.link} text-light bg-primary rounded-2 p-1 fs-6 col`}>Criar Usuário</Link>
        </div>
            <div className="row gap-2">
        <Link to={"/list"} className={`${styles.link} text-light bg-primary rounded-2 p-1 fs-6 col`}>Listar Usuários</Link>
        <Link to={"/disconnect"} className={`${styles.link} text-light bg-primary rounded-2 p-1 fs-6 col`}>Desconectar</Link>
        </div>
        </div>
        </div>
        <nav className="w-100 p-4 d-none d-sm-flex bg-dark text-light align-items-center justify-content-around">
            <Link to={"/home"} className={`${styles.link} text-light bg-primary rounded-5 p-2 fs-5`}>Home</Link>
            <Link to={"/create"} className={`${styles.link} text-light bg-primary rounded-5 p-2 fs-5`}>Criar Usuário</Link>
            <Link to={"/list"} className={`${styles.link} text-light bg-primary rounded-5 p-2 fs-5`}>Listar Usuários</Link>
            <Link to={"/disconnect"} className={`${styles.link} text-light bg-primary rounded-5 p-2 fs-5`}>Desconectar</Link>
        </nav>
        </>
    )
}
export default Menu