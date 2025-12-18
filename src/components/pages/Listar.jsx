import {useEffect,useState} from "react"
import Menu from "../layouts/Menu.jsx"
import {Link} from "react-router-dom"
function Listar(){
    const [dados,setDados]=useState([])
    async function requisitar(){
        await fetch("http://localhost:5000/api",{
            headers:{
                "Conten-type":"application/json"
            },method:"GET"
        }).then((res)=>res.json()).then((results)=>{
            setDados(results)
        })
    }
    useEffect(()=>{
        requisitar()
    },[])
    return(
        <>
        <Menu/>
        <h2 className='w-100 text-center mt-3'>Listar Usuários</h2>
        <div className="w-100 d-flex align-items-center justify-content-center table-responsive">
            <table className="w-75 mt-4 table-bordered table-sm table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Tipo</th>
                    <th>Editar</th>
                    <th>Apagar</th>
                </tr>
                </thead>
                <tbody>
                    {dados.map((valor)=>(
                        <tr key={valor.id}>
                            <td>{valor.id}</td>
                            <td>{valor.nome}</td>
                            <td>{valor.email}</td>
                            <td>{valor.tipo}</td>
                            <td><Link to={`/edit/${valor.id}`}>Editar</Link></td>
                            <td><Link to={`/delete/${valor.id}`}>Apagar</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </>
    )
}
export default Listar