import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { CategoryModule } from './Category/categories.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),
    MongooseModule.forRoot(
      'mongodb+srv://reza:hM6FQFdkXIIJ5efs@clauster1.uxziqim.mongodb.net/test',
    ),
    CategoryModule,
  ],
  controllers: [],
  providers: [AppService, AppResolver],
})
export class AppModule {}
