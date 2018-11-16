import React, { Suspense } from 'react'


const PokeCard = ({ id, picture, series }) => {
    const createImage = (url) => {
        return new Promise((resolve, reject) => {
            const image = new Image()
            image.src = url
            image.onload = resolve
            image.onerror = reject
        })
    }

    const card = createImage(picture)
    console.log(card)
    return (
        <figure key={id}>
            <Suspense fallback={<div>LOADINGGGGGGG</div>}>
                <img src={picture} alt="" width='170'/>
            </Suspense>
            <div>SERIES: {series}</div>
        </figure>
    )
}

export default PokeCard