import Titulo from '../titulo/index'
import Descricao from '../descricao/index';
import Botao from '../botao/index';
import NavBar from '../navbar/index';
import './style.css'

function Main(){
    return(
        <>
        <div className='main'>
            <NavBar/>
            <div className='descricao'>
                <Titulo/>
                <Descricao/>
                <Botao/>
            </div>
        </div>
        </>
    )
}

export default Main;