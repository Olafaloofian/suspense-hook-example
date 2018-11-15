import React, {useState, useEffect, lazy, Suspense} from 'react'
import axios from 'axios';
import PokeCard from './PokeCard'
// const PokeCard = lazy(() => import('./PokeCard'));

export default function Poke({ search }) {
    const [pokemonList, setPokemon] = useState([])

    useEffect(() => {
        axios.get(`https://api.pokemontcg.io/v1/cards?name=${search}`).then(pokemon => {
            console.log(pokemon)
            if(pokemon.data.length) {
                setPokemon(pokemon.data.cards)
            } else {
                setPokemon([])
            }
        })
    }, search)

    const displayPokemon = pokemonList.map(creature => {
        return (
            // <Suspense 
            //     fallback={
            //         <div style={ {width: '170px', height: '265px'} }>
            //             LOADING...
            //         </div>
            //     }
            // >
                <PokeCard
                    id={creature.id}
                    picture={creature.imageUrlHiRes}
                    series={creature.series}
                />
            // </Suspense>
        )
    })

    return (
        // pokemonList.length ?
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {displayPokemon}
            </div>
        // :
        //     <div>
        //         No Pokemon Match Your Input!
        //     </div>
    )
}