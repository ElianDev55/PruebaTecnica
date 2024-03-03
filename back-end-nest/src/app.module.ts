import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { PokemonsModule } from './pokemons/pokemons.module';
import { HabilidadesModule } from './habilidades/habilidades.module';
import { UploadModule } from './upload/upload.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    
    UsersModule,
    
    PokemonsModule,
    
    HabilidadesModule,
    
    UploadModule
  ],
  
  controllers: [AppController],
  
  providers: [AppService],
})
export class AppModule {}
