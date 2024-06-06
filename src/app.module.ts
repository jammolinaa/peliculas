import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CineModule } from './cine/cine.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cine } from './cine/entities/cine.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'cine',
      entities: [Cine],
      synchronize: true,
    }),
  CineModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
