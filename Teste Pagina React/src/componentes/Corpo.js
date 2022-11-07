import React from 'react'
import Dados from './Dados'

export default function Corpo(){
    const ncl='Softex Recife'
    const mdl='4º Módulo - React - Terceira Fase'
    const crs='Programa de Formação Acelerada - Desenvolvedor Front End'
    return(
        <section>
            <h2>Apenas um Teste de React</h2>
            <p>Treinando componentes no React.</p>
            <Dados 
                nucleo={ncl}
                modulo={mdl}
                curso={crs}
            />
        </section>
    )
}