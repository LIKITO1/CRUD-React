import Menu from "../layouts/Menu.jsx"
import Form from "../layouts/Form.jsx"
import {useEffect,useState} from "react"
import {useParams} from "react-router-dom"
function Editar(){
    const {id}=useParams()
    const [nome,setNome]=useState("")
    const [email,setEmail]=useState("")
    const [senha,setSenha]=useState("")
    const [tipoMsg,setTipoMsg]=useState("")
    useEffect(()=>{
        async function requisitar(){
        await fetch(`http://localhost:5000/api/${id}`).then((response)=>response.json()).then((res)=>{
            setNome(res[0].nome||"")
            setEmail(res[0].email||"")
            setSenha(res[0].senha||"")
            setTipoMsg(res.tipo)
        })
    }
    requisitar()
    },[id])
    return(
        <>
            <Menu/>
            <Form acao="editar" caminho="/list" title="Editar Usuário" nomeBtn="Editar Usuário" nomeE={nome} senhaE={senha} emailE={email} editTipoMsg={tipoMsg}/>
        </>
    )
}
export default Editar