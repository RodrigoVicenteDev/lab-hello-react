import image1 from '../../images/menu-top-xs.png'
import image2 from '../../images/ironhack-logo-xs.png'
import './style.css'

function NavBar(){
    return(
        <>
        <div className='navbar'>
        <img src={image2} alt="..."/>
        <img className='img' src={image1} alt="..."/>
        </div>
        </>
    )
}

export default NavBar;