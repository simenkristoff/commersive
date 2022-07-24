import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: "mysql",
    host: "127.0.0.1",
    port: 6033,
    username: "admin",
    password: "mypass123",
    database: "commersive",
    autoLoadModels: true,
    synchronize: true
  }) ,AuthModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
