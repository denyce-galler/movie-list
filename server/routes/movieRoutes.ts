import { Router } from 'express'
import * as db from '../db/movies'
import { MovieData } from '../../models/movieModel'

const router = Router()

//GET /api/v1/movies
router.get('/', async (req, res) => {
  try {
    const movies = await db.getAllMovies()
    res.json({ movies })
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ message: 'Something went wrong with fetching the movie list' })
  }
})

router.post('/', async (req, res) => {
  try {
    const newMovie = req.body as MovieData
    if (!newMovie) {
      res.sendStatus(400)
      return
    }

    const movie = await db.addMovie(newMovie)
    res.json({ movie })
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
})

router.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  if (isNaN(id)) {
    res.status(400).send('Bad Request: ID must be a number')
    return
  }

  try {
    await db.deleteMovie(id)
    res.sendStatus(200)
  } catch (err) {
    console.log(err)
    res.status(500).send('Could not delete pokemon')
  }
})

export default router
