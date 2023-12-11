import { Headerusuario } from '../componentes/Header'
import { Footer_interno } from '../componentes/Footer'
import './stilos/Paginaatualizajogo.css'
import Form_atualizajogo from '../componentes/Formularioatualizajogo'

const Paginaatualizajogo = () => {
    return (
        <>
            <div id='bodyatualizajogo'>

                <div>
                    <Headerusuario />
                </div>

                <div id='mainatualizajogo'>
                    <Form_atualizajogo/>
                    
                </div>

                <div id='footer01atualizajogo'>
                    <Footer_interno />
                </div>


            </div>
        </>

    )
}

export default Paginaatualizajogo