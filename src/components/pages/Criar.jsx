import Menu from "../layouts/Menu.jsx"
import Form from "../layouts/Form.jsx"
function Criar(){
    return(
        <>
            <Menu/>
            <Form acao="criar" caminho="/list" title="Criar Usuário" nomeBtn="Criar Usuário"/>
        </>
    )
}
export default Criar