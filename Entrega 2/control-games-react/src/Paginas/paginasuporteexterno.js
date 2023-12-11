import { Headersuportelogincadastro } from '../componentes/Header'
import { Footer_externo } from '../componentes/Footer'
import './stilos/Paginasuporteexterno.css'

const Paginasuporteexterno = () => {
    return (
        <>
        <div id='bodysuporteexterno'> 
            <div>
                <Headersuportelogincadastro />
            </div>

            <div id='mainsuporteexterno'>
                <div class="divisaosuporteexterno">
                    <div class="linhasuporteexterno"></div>
                    <p>Principais dúvidas</p>
                    <div class="linhasuporteexterno"></div>
                </div>

                <article>

                    <aside>
                        <h2>O que é o control Games ?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatum quas, quaerat quod quam tempore, ab dolorem quia explicabo illo molestiae sunt quisquam, eaque sint dolore possimus accusantium odio voluptatem.</p>
                    </aside>

                    <aside>
                        <h2>Ajuda 2</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatum quas, quaerat quod quam tempore, ab dolorem quia explicabo illo molestiae sunt quisquam, eaque sint dolore possimus accusantium odio voluptatem.</p>
                    </aside>

                    <aside>
                        <h2>Ajuda 3</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatum quas, quaerat quod quam tempore, ab dolorem quia explicabo illo molestiae sunt quisquam, eaque sint dolore possimus accusantium odio voluptatem.</p>
                    </aside>

                    <aside>
                        <h2>Ajuda 3</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatum quas, quaerat quod quam tempore, ab dolorem quia explicabo illo molestiae sunt quisquam, eaque sint dolore possimus accusantium odio voluptatem.</p>
                    </aside>

                    <aside>
                        <h2>Ajuda 4</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatum quas, quaerat quod quam tempore, ab dolorem quia explicabo illo molestiae sunt quisquam, eaque sint dolore possimus accusantium odio voluptatem.</p>
                    </aside>

                    <aside id="suporte">
                        <h2>Ainda com dúvida ? , fale com o nosso suporte.</h2>
                        <div id="suporte_links">
                            <a href="https://wa.me/5571997227237">Falar com o Suporte</a>
                            <a href="https://wa.me/5571997227237"><img src="https://www.oabsp.org.br/subs/lins/galeria-de-fotos/whats.png/image" alt=""/></a>
                        </div>
                    </aside>

                </article>

            </div>

            <div id='footer01'>
                <Footer_externo />
            </div>

        </div>
        </>

    )
}

export default Paginasuporteexterno