import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { AppController } from './app.controller';

import { User } from './user/entity/user.entity';
import { UserModule } from './user/user.module';
// import { ProfileModule } from './profile/profile.module';

@Module({
  // controllers: [AppController],
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host:'localhost',
      // host: '127.0.0.1',
      port: 3306,
      username: 'root',
      // password: null,
      password :'',
      database: 'mamun',
      entities: [User],
      synchronize: true,
    }),
   
  ],
})
export class AppModule {}
