import { getAllMovies } from '../apis/movies'
import { useQuery } from '@tanstack/react-query'
import MovieDelete from './MovieDelete'

export default function MovieList() {
  const {
    data: movies,
    isError,
    isLoading,
  } = useQuery(['movies'], getAllMovies)

  if (isError) {
    return <div>There was an error trying to get the movies</div>
  }

  if (isLoading) {
    return <div>Loading your movie</div>
  }

  return (
    <>
      <h3>Movie List</h3>
      <div>
        {movies.map((movie) => (
          <>
            <p key={movie.id}>
              My favourite movie {movie.title} was released on{' '}
              {movie.release_date} and its the best!
            </p>
            <MovieDelete id={movie.id} />
          </>
        ))}
      </div>
    </>
  )
}
