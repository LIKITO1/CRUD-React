import Menu from "../layouts/Menu.jsx"
import {useState} from "react"
function Home(){
    const [admin,setAdmin]=useState("Lucas")
    return(
        <>
        <Menu/>
            <div className="container d-flex align-items-center justify-content-center flex-column p-4">
                <h3 className="mb-5">Bem Vindo à pàgina principal , Administrador(a) {admin}</h3>
                <p className="w-75">Seja muito bem-vindo(a)! Esta é a sua central de gerenciamento, onde você tem o controle total sobre seus registros. Aqui você pode criar, visualizar, editar e excluir informações de forma simples, rápida e segura. Navegue com facilidade e aproveite todas as ferramentas para organizar seus dados com eficiência.</p>
            </div>
        </>
    )
}
export default Home