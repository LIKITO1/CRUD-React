import Menu from "../layouts/Menu"
import {useState,useEffect} from "react"
function Perfil(){
    const [nome,setNome]=useState("")
    const [email,setEmail]=useState("")
    const local=localStorage
    function reset(){
        console.log("clicou")
    }
    useEffect(()=>{
        async function requisitar(){
            await fetch("http://localhost:3000/api",{
                headers:{
                    "Content-Type":"application/json",
                    authorization:"Bearer "+local.getItem("token")
                }
            }).then((response)=>response.json()).then((valor)=>{
                valor.forEach((dados)=>{
                    if(dados.id==local.getItem("id_usuario")){
                        setNome(dados.nome)
                        setEmail(dados.email)
                    }
                })
            })
        }
        requisitar()
    },[])
    return(
        <>
        <Menu/>
        <div className="w-100 h-100 d-flex align-items-center justify-content-center flex-column gap-3 mt-5">
            <h2 className="fs-1">Perfil de usuário</h2>
            <p className="fs-4">Nome:{nome}</p>
            <p className="fs-4">Email:{email}</p>
            <button className="btn btn-danger" onClick={reset}>Resetar senha</button>
        </div>
        </>
    )
}
export default Perfil