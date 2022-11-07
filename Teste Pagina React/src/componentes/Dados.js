import React from 'react'
export default function Dados(props){
    return(
        <section>
            <p>Núcleo: {props.nucleo}</p>
            <p>Módulo: {props.modulo}</p>
            <p>Curso: {props.curso}</p>
        </section>
    )
}