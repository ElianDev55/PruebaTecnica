import { Injectable } from '@nestjs/common';
import { Pokemon } from './Pokemon.entity';
import { CreatePokemonDto } from './dto/Pokemons.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdatePokemonDto } from './dto/Pokemons.dto';
import { Habilidad } from '../habilidades/Habilidades.entity';



@Injectable()


export class PokemonsService {

    constructor(@InjectRepository(Pokemon) private PokemonRespository: Repository <Pokemon>,
    @InjectRepository(Habilidad) private HabilidadRepository: Repository<Habilidad>
    
    ) {}
    

    

    async CreatePokemon(pokemonData: CreatePokemonDto): Promise<Pokemon> {
        const { habilidades, ...pokemonDataWithoutHabilidades } = pokemonData; // Destructure skills
      
        // Create a new Pokemon with skills (if provided)
        const newPokemon = this.PokemonRespository.create({
          ...pokemonDataWithoutHabilidades,
          habilidades: habilidades?.map(async (habilidadId) => {
            const habilidadEntity = await this.HabilidadRepository.findOneOrFail(habilidadId);
            return habilidadEntity;
          }),
        });
      
        // Upload and save image filename if present
        if (pokemonData.imagen) {
          const filename = await this.uploadService.uploadImage(pokemonData.imagen);
          newPokemon.imagen = filename;
        }
      
        // Save the new Pokemon with skills and (potentially) image
        return this.PokemonRespository.save(newPokemon);
      }
        

    GetAllPokemons() {
        return this.PokemonRespository.find();
    }

    GetPokemonById(id: number) {
        return this.PokemonRespository.findOne({
            where: { id }
        });
    }

    DeletePokemon(id: number) {
        return this.PokemonRespository.delete({id});
    }

    UpdatePokemon(id: number, Pokemon: Partial<UpdatePokemonDto>) {
        return this.PokemonRespository.update({id}, Pokemon);
    }

}
