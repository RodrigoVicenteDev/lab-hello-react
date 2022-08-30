import Carta1 from '../cartas/carta1'
import Carta2 from '../cartas/carta2'
import Carta3 from '../cartas/carta3'
import Carta4 from '../cartas/carta4';
import './style.css'

function Cards(){
    return(
        <>
        <div className='cards'>
            <Carta1/>
            <Carta2/>
            <Carta3/>
            <Carta4/>

        </div>
        </>
    )
}


export default Cards;