import connection from './connection'
import { Movies, MovieData } from '../../models/movieModel'

export async function getAllMovies(db = connection): Promise<Movies[]> {
  const movies = await db('movies').select('*')
  return movies
}

export async function addMovie(
  newMovie: MovieData,
  db = connection
): Promise<MovieData> {
  const [movie] = await db('movies').insert(newMovie).returning('*')
  return movie
}

export async function deleteMovie(
  id: number,
  db = connection
): Promise<Movies> {
  await db('movies').where({ id }).delete()
}
