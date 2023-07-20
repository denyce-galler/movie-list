import MovieList from './MovieList'
import MovieForm from './MovieForm'

function App() {
  return (
    <>
      <header className="header">
        <h1>My Movie Collection 🎥</h1>
      </header>
      <section className="main">
        <h2>
          Add your favourite movies below or delete them if they aren't your
          favourite anymore!
        </h2>
        <MovieForm />
        <MovieList />
      </section>
    </>
  )
}

export default App
