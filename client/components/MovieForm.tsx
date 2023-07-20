import { ChangeEvent, FormEvent, useState } from 'react'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { addMovie } from '../apis/movies'
import { MovieData } from '../../models/movieModel'

const initialFormData: MovieData = {
  title: '',
  release_date: '',
}

export default function MovieForm() {
  const [movies, setMovies] = useState<MovieData>(initialFormData)
  const queryClient = useQueryClient()

  const addMovieMutation = useMutation(addMovie, {
    onSuccess: async () => {
      queryClient.invalidateQueries(['movies'])
    },
  })

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    setMovies({ ...movies, [name]: value })
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    addMovieMutation.mutate(movies)
    setMovies(initialFormData)
  }

  if (addMovieMutation.isError) {
    return <div>There was an error adding your movie! </div>
  }

  if (addMovieMutation.isLoading) {
    return <div>Adding your movie</div>
  }

  return (
    <>
      <h3>Add your favourite movie here 👇</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Movie:</label>
          <input
            type="text"
            name="title"
            id="title"
            value={movies.title}
            onChange={handleChange}
          />
          <label htmlFor="release_date">Release date:</label>
          <input
            type="text"
            name="release_date"
            id="release_date"
            value={movies.release_date}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}
