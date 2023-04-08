import { Inter } from 'next/font/google'
import Movie from './Movie'

const inter = Inter({ subsets: ['latin'] })

/* Here is the explanation for the code below:
1. We import the fetch and the Movie component.
2. We are using the async/await keywords to fetch the data from the API.
3. We are using the map() method to loop through the results array and display the movies.
4. We are passing the data we want to display as props to the Movie component.
5. We are returning the data from the API and the Movie component. */

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  )
  const res = await data.json()
  // console.log(res)

  return (
    <main>
      <div className='grid gap-16 grid-cols-fluid'>
        {res.results.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </main>
  )
}
