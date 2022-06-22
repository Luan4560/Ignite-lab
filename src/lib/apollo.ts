import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-eu-west-2.graphcms.com/v2/cl4ogfawp04q001xs2eclae2j/master',
  cache: new InMemoryCache() // Estratégia de cache para controle de requisições 
})