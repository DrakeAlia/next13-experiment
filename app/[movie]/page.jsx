import Image from "next/image"

/* Here is the explanation for the code below:
1. We import the fetch function from node-fetch
2. We import the Image component from next/image
3. We use the getStaticPaths function to generate the paths for the pages
4. We use the getStaticProps function to pass the data from our API to the component as props
5. We use the Image component to display the movie poster */

export async function generateStaticParams() {
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
    )
    const res = await data.json()
    return res.results.map((movie) => ({
        movie: toString(movie.id),
    }))
}

export default async function MovieDetail({ params }) {
    // console.log(params)
    const { movie } = params
    const imagePath = "https://image.tmdb.org/t/p/original"
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`,
    )
    const res = await data.json()
    return (
        <div>
            <div>
                <h2 className="text-2xl">{res.title}</h2>
                <h2 className="text-lg">{res.release_date}</h2>
                <h2>Runtime: {res.runtime} minutes</h2>
                <h2 className="text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded-md">
                    {res.status}
                </h2>
                <Image className="my-12 w-full"
                    src={imagePath + res.backdrop_path}
                    width={1000}
                    height={1000}
                    priority
                />
                <p>{res.overview}</p>
            </div>
        </div>
    )
}