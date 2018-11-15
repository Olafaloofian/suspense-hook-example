import React from 'react'

export default function PokeCard({ id, picture, series }) {
    return(
        <figure key={id}>
            <img src={picture} alt="" width='170'/>
            <div>SERIES: {series}</div>
        </figure>
    )
}