import express from 'express'
import path from 'path'
import movieRoutes from './routes/movieRoutes'

const server = express()

server.use(express.json())

server.use('/api/v1/movies', movieRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use('/assets', express.static(path.resolve(__dirname, '../assets')))
  server.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../index.html'))
  })
}

export default server
