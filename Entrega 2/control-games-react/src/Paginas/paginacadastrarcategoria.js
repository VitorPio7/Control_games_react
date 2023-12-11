import { Headerusuario } from '../componentes/Header'
import { Footer_interno } from '../componentes/Footer'
import Form_add_categoria from '../componentes/Formularioaddcategoria'
import './stilos/Paginacadastrarcategoria.css'

const Paginacadastrarcategoria = () => {


    return (
        <>
            <div id='bodycadastrarcategoria'>
                <div>
                    <Headerusuario />
                </div>

                <div id='maincadastrarcategoria'>
                    <div id="box_cadastra_plataforma">
                        <Form_add_categoria/>
                    </div>
                </div>


                <div id='footer01cadastrarcategoria'>
                    <Footer_interno />
                </div>
            </div>
        </>

    )
}

export default Paginacadastrarcategoria