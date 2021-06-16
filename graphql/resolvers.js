import { getMoives } from './db'

const resolvers = {
  Query: {
    movies: () => getMoives()
  }
};

export default resolvers;