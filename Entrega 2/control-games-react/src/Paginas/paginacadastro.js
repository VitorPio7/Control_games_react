import { Headerlogin } from '../componentes/Header'
import { Form_cadastro } from '../componentes/Formularios'
import { Footer_externo} from '../componentes/Footer'
import './stilos/Paginacadastro.css'

const Paginacadastro = () => {
    return (
        <>
            <div id='bodycadastro'>

                <div id='maincadastro'>
                    <div>
                        <Headerlogin />
                    </div>

                    <div id='formcadastro'>
                        <Form_cadastro />
                    </div>

                    <div id='footer01cadastro'>
                        <Footer_externo />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Paginacadastro