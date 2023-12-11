import { Headerlogin, Headerusuario } from '../componentes/Header'
import { Form_configuracao } from '../componentes/Formularios'
import { Footer_interno } from '../componentes/Footer'
import './stilos/Paginaconfiguracao.css'

const Paginaconfiguracao = () => {
    return (
        <>
            <div id='bodyconfiguracao'>
                <div id='mainconfiguracao'>
                    <div>
                        <Headerusuario />
                    </div>

                    <div id='formconfiguracao'>
                        <Form_configuracao />
                    </div>

                    <div id='footer01configuracao'>
                        <Footer_interno />
                    </div>

                </div>


            </div>
        </>

    )
}

export default Paginaconfiguracao