import React, {useState, useEffect, lazy, Suspense} from 'react'
import axios from 'axios';
import PokeCard from './PokeCard'
import ErrorBoundary from './Error'
// const PokeCard = lazy(() => import('./PokeCard'));

export default class Poke extends React.Component {
    constructor() {
        super()
        this.state = {
            pokemon: []
        }
        console.log('Hit...')
    }

    componentDidUpdate(prevProps) {
        if(prevProps.search !== this.props.search) {
            axios.get(`https://api.pokemontcg.io/v1/cards?name=${this.props.search}`).then(response => {
                console.log(response)
                if(response.data.cards.length) {
                    this.setState({ pokemon: response.data.cards })
                } 
            })
        }
    }
    
    render() {
    // throw new Error('Trash coder')
    const displayPokemon = this.state.pokemon.map(creature => {
        return (
            <ErrorBoundary>
                {/* <Suspense 
                    fallback={
                        <div style={ {width: '170px', height: '265px'} }>
                            LOADING...
                        </div>
                    }
                > */}
                    <PokeCard
                        id={creature.id}
                        picture={creature.imageUrlHiRes}
                        series={creature.series}
                    />
                {/* </Suspense> */}
            </ErrorBoundary>
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
}