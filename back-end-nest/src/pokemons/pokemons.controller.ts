import { Controller } from '@nestjs/common';
import { PokemonsService } from './pokemons.service';
import { CreatePokemonDto } from './dto/Pokemons.dto';
import { Body, Get, Post, Param, ParseIntPipe, Patch, Delete } from '@nestjs/common';
import { UpdatePokemonDto } from './dto/Pokemons.dto';
import { Pokemon } from './Pokemon.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadedFile, UseInterceptors } from '@nestjs/common';
import { Multer } from 'multer';

@Controller('pokemons')

export class PokemonsController {
    
        constructor(private pokemonsService: PokemonsService) {}
    
        @Get()
        getAllPokemons() {
            return this.pokemonsService.GetAllPokemons();
        }
    
        @Post()
        @UseInterceptors(FileInterceptor('imagen')) // Intercept image uploads
        async create(@UploadedFile() imagen: Express.Multer.File, @Body() pokemonData: CreatePokemonDto): Promise<Pokemon> {
          const pokemon = await this.pokemonsService.CreatePokemon({ ...pokemonData, imagen }); // Pass image data to service
          return pokemon;
        }
    
        @Get(':id')
        getPokemonById(@Param('id', ParseIntPipe) id: number) {
            return this.pokemonsService.GetPokemonById(id);
        }
    
        @Patch(':id')
        updatePokemon(@Param('id', ParseIntPipe) id: number, @Body() pokemon: Partial<UpdatePokemonDto>) {
            return this.pokemonsService.UpdatePokemon(id, pokemon);
        }
    
        @Delete(':id')
        deletePokemon(@Param('id', ParseIntPipe) id: number) {
            return this.pokemonsService.DeletePokemon(id);
        }

}
