import request from 'superagent'
import { Movies, MovieData } from '../../models/movieModel'

export async function getAllMovies(): Promise<Movies[]> {
  const response = await request.get('/api/v1/movies')
  const responseBody = response.body.movies

  return responseBody
}

export async function addMovie(newMovie: MovieData): Promise<MovieData> {
  await request.post('/api/v1/movies').send(newMovie)
}

interface DeleteMovie {
  id: Movies['id']
}

export async function deleteMovie(idObj: DeleteMovie): Promise<void> {
  await request.delete(`/api/v1/movies/${idObj.id}`)
}
