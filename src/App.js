import {useEffect, useState} from "react"
import "./App.css"
import {getMovie, searchMovie} from "./api"
import {Input, Card, Badge, Navbar, Button, Footer} from "react-daisyui"

function App() {
  const [upcomingMovies, setUpcomingMovies] = useState([])

  useEffect(() => {
    getMovie().then((result) => {
      setUpcomingMovies(result)
    })
  }, [])

  console.log({upcomingMovies: upcomingMovies})

  const UpcomingMovieList = () => {
    return upcomingMovies.map((movie, index) => {
      return (
        <>
          <Card key={index} className="bg-neutral text-neutral-content shadow-xl">
            <Card.Image alt={movie.title} src={`${process.env.REACT_APP_BASEIMG}/${movie.poster_path}`} />
            <Card.Body>
              <Card.Title>
                <b> {movie.title}</b>
                {/* <Badge color="secondary">NEW</Badge> */}
              </Card.Title>
              <div className="text-left">
                <Card.Actions>
                  Release Date:{" "}
                  <b>
                    <i>{movie.release_date}</i>
                  </b>
                </Card.Actions>
              </div>
              <div className="text-right">
                {/* <Badge variant="outline">{movie.original_language}</Badge> */}
                <Badge variant="outline" color="warning">
                  {movie.vote_average.toFixed(1)}
                </Badge>
              </div>
            </Card.Body>
          </Card>
        </>
      )
    })
  }

  //variable untuk simpan query search
  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q)
      setUpcomingMovies(query.results)
    }
    if (q.length === 0) {
      const zero = await getMovie()
      setUpcomingMovies(zero)
    }
  }

  return (
    <div className="App">
      <header className="App-header text-center">
        <Navbar>
          <Navbar.Start></Navbar.Start>
          <Navbar.Center>
            <Button className="btn btn-info btn-lg text-5xl font-bold m-6">SEARCH MOVIE APP </Button>
            <Button className="btn btn-ghost btn-xs text-1xl font-bold align-center" color="info" variant="outline">
              REACTJS + DaisyUI
            </Button>
          </Navbar.Center>
          <Navbar.End></Navbar.End>
        </Navbar>
        <Input placeholder="type something..." className="movie-search input-bordered input-warning w-full max-w-xs" onChange={({target}) => search(target.value)}></Input>
      </header>
      <div className="movie-container">
        <UpcomingMovieList />
      </div>
      <br />
      <Footer className="footer-center p-4 bg-neutral text-neutral-content">
        <div className="items-center">
          <p>Copyright © Dhilen 2023 - All right reserved</p>
          <span>
            This ReactApp is based on:{" "}
            <a className="link link-primary" href="https://www.youtube.com/watch?v=QV4qKaeEf9c&ab_channel=DeaAfrizal">
              Dea Afrizal's ReactJS Tutorial
            </a>
          </span>
        </div>
      </Footer>
    </div>
  )
}

export default App
