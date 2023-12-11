import Logo from '../imagens/Logotipo/logotipo header.png'
import Img_suporte from '../imagens/botoes/Customer Support.png'
import Img_config from '../imagens/botoes/Settings.png'
import './stilos/footerstyle.css'
import { Link } from 'react-router-dom'

export function Footer_interno() {
    return (
        <div id='footer'>

            <section className="rodape">
                <div className="logo">
                    <Link to='/home'>
                        <a><img src={Logo}></img></a>
                    </Link>
                    <Link to='/home'>
                        <a>Control_Games</a>
                    </Link>
                </div>

                <div className="links">

                    <Link to='/suporte'>
                        <a><img src={Img_suporte}></img>Suporte</a>
                    </Link>

                    <Link to='/configuracao'>
                        <a><img src={Img_config}></img>Configurações</a>
                    </Link>
                </div>
            </section>

        </div>
    );
}

export function Footer_externo() {
    return (
        <div id='footer'>

            <section className="rodape">
                <div className="logo">
                    <a ><img src={Logo}></img></a>
                    <a>Control_Games</a>
                </div>

                <div className="links">
                    <Link to='/suporteexterno'>
                        <a><img src={Img_suporte}></img>Suporte</a>
                    </Link>                </div>
            </section>

        </div>
    );
}