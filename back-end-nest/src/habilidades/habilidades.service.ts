import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Habilidad } from './Habilidades.entity';
import { Pokemon } from '../pokemons/Pokemon.entity';


@Injectable()
export class HabilidadesService {
    constructor(
        @InjectRepository(Habilidad)
        private habilidadRepository: Repository<Habilidad>,
        @InjectRepository(Pokemon)
        private pokemonRepository: Repository<Pokemon>,
    ) {}

  
    }

