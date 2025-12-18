import {Link} from "react-router-dom"
import {useState} from "react"
function App() {
  const [email,setEmail]=useState("")
  const [senha,setSenha]=useState("")
  const [logado,setLogado]=useState(false)
  async function logar(e){
    e.preventDefault()
    await fetch("http://localhost:5000/api").then((response)=>response.json()).then((res)=>{
      res.forEach((valor)=>{
        if(!logado){
        if(valor.senha==senha&&valor.email==email){
          setLogado(true)
        }else{
          setLogado(false)
        }
      }
      })
      console.log(logado)
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
        <Link to="/logar">Cadastrar</Link>
      </form>
    </div>
    </>
  )
}
export default App