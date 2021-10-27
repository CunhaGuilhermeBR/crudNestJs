import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './app.service';
import { UsersController } from './controller/users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './model/user.model';
import { ConfigModule } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [ 
    ConfigModule.forRoot(),
    MulterModule.register({
      dest: './files',
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql', 
      host: process.env.HOST,
      port: parseInt( process.env.PORT ) || 3000 ,
      username: process.env.USER_BD,
      password: process.env.PASSWORD,
      database: 'crudUsers',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([User])
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}