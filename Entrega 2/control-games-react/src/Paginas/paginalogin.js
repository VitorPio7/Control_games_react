import { Headerlogin } from '../componentes/Header'
import { Form_login } from '../componentes/Formularios'
import { Footer_externo } from '../componentes/Footer'
import './stilos/Paginalogin.css'

const Paginalogin = () => {
    return (
        <>
            <div id='bodylogin'> 
                <div id='mainlogin'>
                <div>
                    <Headerlogin />
                </div>

                <div id='formlogin'>
                    <Form_login />
                </div>

                <div id='footer01login'>
                    <Footer_externo />
                </div>

                </div>
            </div> 
        </>

    )
}

export default Paginalogin