import './Menu.css'
import linha from '../../assets/line 1.png'

function Menu() {
    return (
        <div className='component-menu'>
            <header>
                <div className="menu">
                    <ul>
                        <a href="#"><li>Home</li></a>
                        <a href="#"><li>Sobre</li></a>
                        <a href="#"><li>Portfólio</li></a>
                    </ul>
                </div>
                <div className="botao-contato">
                    <button>Contato</button>
                </div>
            </header>
            <div className="linha">
                <img src={linha} alt="" />
            </div>
        </div>
    )
}
export default Menu