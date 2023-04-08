import Link from 'next/link'
import Image from 'next/image'

/* Here is the explanation for the code below:
1. This is a functional component that takes in a props object as parameter.
2. The props object contains the data for the movie title, id, poster, and release date.
3. The imagePath variable is used to store the base URL for the image path.
4. The link component is used to make the movie title clickable to navigate to the dynamic page.
5. The Image component is used to display the movie poster.
6. The href attribute of the Link component is used to navigate to the dynamic page with the movie id. */

export default function Movie({ title, id, poster_path, release_date }) {
    const imagePath = "https://image.tmdb.org/t/p/original"
    // console.log(poster_path)
    return (
        <div>
            <h1>{title}</h1>
            <h2>{release_date}</h2>
            <Link href={`/${id}`}>
                <Image
                    src={imagePath + poster_path}
                    width={800}
                    height={800}
                    alt={title} />
            </Link>
        </div>
    )
}   