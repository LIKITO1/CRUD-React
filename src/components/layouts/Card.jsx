import styles from "./Card.module.css"
import {useState,useEffect} from "react"
import {useNavigate} from "react-router-dom"
function Card({tipo,msg,caminho}){
    const navigate=useNavigate()
    const [sumir,setSumir]=useState("block")
    useEffect(()=>{
        const intervalo=setTimeout(()=>{
            setSumir("none")
            navigate(caminho)
            clearTimeout(intervalo)
        },3000)
    },[msg,caminho])
    return(
        <>
            <div className={`${styles.card} rounded-5 position-absolute bg-dark w-75 h-25 text-${tipo} d-flex align-items-center justify-content-center d-${sumir}`}>{msg}</div>
        </>
    )
}
export default Card