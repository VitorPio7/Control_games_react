import { Headerusuario } from '../componentes/Header'
import { Footer_interno } from '../componentes/Footer'
import './stilos/Paginacadastrojogo.css'
import Form_cadastrojogo from '../componentes/Formulariocadastrojogo'

const Paginacadastrojogo = () => {
    return (
        <>
            <div id='bodycadastrojogo'>

                <div>
                    <Headerusuario />
                </div>

                <div id='maincadastrarjogo'>
                    
                        <Form_cadastrojogo />
                    
                    
                </div>

                <div id='footer01cadastrojogo'>
                    <Footer_interno />
                </div>


            </div>
        </>

    )
}

export default Paginacadastrojogo