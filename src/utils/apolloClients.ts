import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client'

export const apolloClientLens = new ApolloClient({
  uri: 'https://api.lens.dev/',
  cache: new InMemoryCache()
})