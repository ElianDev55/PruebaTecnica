import React, { useContext } from 'react';
import { PokemonsContext } from '../Context/ContextPokemons';
import { PokemonCard } from '../components/PokemonCard';
import { Searcher } from '../components/Searcher';
import { PokeLayout } from '../layouts/PokeLayout';
import { SearcherLayout } from '../layouts/SeacherLayout';

export const Pokemon = () => {
    const context = useContext(PokemonsContext);

    return (
        <>
            <SearcherLayout>
                <Searcher />
            </SearcherLayout>

            <PokeLayout>
                {context.searchResults?.map((pokemon) => {
                    return <PokemonCard key={pokemon.id} data={pokemon} />;
                })}
            </PokeLayout>
        </>
    );
}