import {Link} from "react-router-dom"
import {useState} from "react"
import Card from "../layouts/Card"
function Cadastrar(){
    const [nome,setNome]=useState("")
    const [email,setEmail]=useState("")
    const [senha,setSenha]=useState("")
    const [msg,setMsg]=useState("")
    const [tipo,setTipo]=useState("")
    const [cardId,setCardId]=useState(0)
    const [permitir,setPermitir]=useState(false)
    async function cadastrar(e){
        e.preventDefault()
        if(email!=""&&senha!=""&&nome!=""){
        await fetch("https://backend-crud-react.onrender.com/create",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },body:JSON.stringify({nome,email,senha})
        }).then((response)=>response.json()).then((res)=>{
            setMsg(res.msg)
            setTipo(res.tipo)
            setCardId((e)=>e+1)
            if(res.tipo=="success"){
            setPermitir(true)
            setTimeout(()=>{
                setMsg("Redirecionando...")
            },1500)
        }
        })
    }else{
        setMsg("Preecha os campos de nome,email e senha")
        setTipo("warning")
        setCardId((e)=>e+1)
    }
    }
    return(
        <>
    <div className="position-absolute p-5 bg-dark w-100 h-100 text-light">
      <h1 className="display-4 d-flex align-items-center justify-content-center mt-5 mb-5">Cadastro</h1>
      <form className="form-group d-flex flex-column align-items-center justify-content-center gap-2 w-100 h-50 mt-4">
        <label>Nome:</label>
        <input type="text" placeholder="Nome..." className="form-control w-25" onChange={(e)=>{setNome(e.target.value)}}/>
        <label>Email:</label>
        <input type="email" placeholder="Email..." className="form-control w-25" onChange={(e)=>{setEmail(e.target.value)}}/>
        <label>Senha:</label>
        <input type="password" placeholder="Senha..." className="form-control w-25" onChange={(e)=>{setSenha(e.target.value)}}/>
        <button className="btn btn-success mt-4" onClick={cadastrar}>Cadastrar</button>
        <Link to="/">Login</Link>
      </form>
    </div>
    {msg&&msg!=""&&(
      <Card tipo={tipo} msg={msg} key={cardId} caminho="/home" permitido={permitir}/>
    )}
    </>
    )
}
export default Cadastrar