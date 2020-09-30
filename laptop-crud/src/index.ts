import "reflect-metadata";
import { createConnection } from 'typeorm';
import { buildSchema } from 'type-graphql';

import { LaptopResolver } from './resolvers/LaptopResolver';
import { ApolloServer } from 'apollo-server-express';
import * as Express from 'express';

const PORT = 3000;

async function bootstrap() {
    await createConnection();

    const schema = await buildSchema({
        resolvers: [LaptopResolver],
      });

    const server = new ApolloServer({
        schema,
        playground: true
    });

    const app = Express();
    server.applyMiddleware({ app });

    app.listen(PORT, function() {
        console.log(`Server is running, GraphQL Playground available at localhost:${PORT}/graphql`);
    });
    

}

bootstrap();