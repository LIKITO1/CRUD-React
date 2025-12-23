import {Link} from "react-router-dom"
import {useState} from "react"
import Card from "./components/layouts/Card"
function App() {
  const [email,setEmail]=useState("")
  const [senha,setSenha]=useState("")
  const [msg,setMsg]=useState("")
  const [tipoMsg,setTipoMsg]=useState("")
  const [permitir,setPermitir]=useState(false)
  const [mostrarCard,setMostrarCard]=useState(false)
  const [cardId,setCardId]=useState(0)
  const local=localStorage
  async function logar(e){
    e.preventDefault()
    setCardId((e)=>e+1)
    setMsg("")
    setTipoMsg("")
    setPermitir(false)
    setMostrarCard(false)
    await fetch("http://localhost:3000/login",{
      method:"POST",
      headers:{
        authorization:"Bearer "+local.getItem("token"),
        "Content-Type":"application/json"
      },
      body:JSON.stringify({email:email,senha:senha})
    }).then(async(response)=>await response.json()).then((res)=>{
      setMsg(res.msg)
      setTipoMsg(res.tipo)
      setMostrarCard(false)
      local.setItem("token",res.token)
      local.setItem("id_usuario",res.id)
      setTimeout(()=>{setMostrarCard(true)},0)
      if(res.tipo=="success"){
        setPermitir(true)
        setTimeout(()=>{
          setMsg("Redirecionando...")
        },1500)
      }
    })
}
  return (
    <>
    <div className="position-absolute p-5 bg-dark w-100 h-100 text-light">
      <h1 className="display-4 d-flex align-items-center justify-content-center mt-5">Login</h1>
      <form className="form-group d-flex flex-column align-items-center justify-content-center gap-2 w-100 h-50 mt-4">
        <label>Email:</label>
        <input type="email" placeholder="Email..." className="form-control w-25" onChange={(e)=>{setEmail(e.target.value)}}/>
        <label>Senha:</label>
        <input type="password" placeholder="Senha..." className="form-control w-25" onChange={(e)=>{setSenha(e.target.value)}}/>
        <button className="btn btn-success mt-4" onClick={logar}>Logar</button>
        <Link to="/cadastrar">Cadastrar</Link>
      </form>
    </div>
    {mostrarCard&&(
      <Card tipo={tipoMsg} msg={msg} caminho="/home" permitido={permitir} key={cardId}/>
    )}
    </>
  )
}
export default App