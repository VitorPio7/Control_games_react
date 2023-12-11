import { Headerusuario } from '../componentes/Header'
import { Footer_interno } from '../componentes/Footer'
import './stilos/Paginacadastroplataformas.css'
import {Form_add_plataforma} from '../componentes/Formularios'

const Paginacadastroplataforma = () => {
    return (
        <>
        <div id='bodyplataforma'>
            <div>
                <Headerusuario />
            </div>

            <div id='mainplataforma'>
                <Form_add_plataforma/>
            </div>

            <div id='footer01plataforma'>
                <Footer_interno />
            </div>
        </div>
        </>

    )
}

export default Paginacadastroplataforma