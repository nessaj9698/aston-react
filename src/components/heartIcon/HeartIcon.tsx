import { useState } from "react"

import { toggleFavouriteMovieLS } from "../../utils/localStorage"

type Props = {
  addToFavourite: () => void
  removeFromFavourite: () => void
  movieId: string
}

export const HeartIcon = ({
  addToFavourite,
  removeFromFavourite,
  movieId,
}: Props) => {
  const [isLike, setLike] = useState<boolean>(() => {
    const likedMovies = localStorage.getItem("likedMovies")
    if (likedMovies) {
      const likedMoviesArr = JSON.parse(likedMovies)
      return likedMoviesArr.includes(movieId)
    }
    return false
  })

  const handleClick = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.preventDefault()

    if (isLike) {
      removeFromFavourite()
    } else {
      addToFavourite()
    }
    toggleFavouriteMovieLS(movieId)
    setLike(!isLike)
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="#f50"
      fill={isLike ? "#f50" : "none"}
      onClick={handleClick}
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C16.09 3.81 17.76 3 19.5 3 22.58 3 25 5.42 25 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  )
}
