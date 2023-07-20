import { useQueryClient, useMutation } from '@tanstack/react-query'
import { deleteMovie } from '../apis/movies'

interface Props {
  id: number
}

export default function MovieDelete(props: Props) {
  const queryClient = useQueryClient()

  //delete
  const deleteMovieMutation = useMutation(deleteMovie, {
    onSuccess: () => {
      queryClient.invalidateQueries(['movies'])
    },
  })

  const handleDeleteClick = () => {
    console.log('deleting', props.id)
    const id = props.id
    deleteMovieMutation.mutate({ id })
  }

  return (
    <p>
      <button onClick={handleDeleteClick}>Delete</button>
    </p>
  )
}
