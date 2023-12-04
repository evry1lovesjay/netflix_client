import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@mui/icons-material"
import "./ListItem.scss"
import { useEffect, useState } from "react"
import newRequest from "../../utils/newRequest"
import { Link } from "react-router-dom"

const ListItem = ({index, item}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [movie, setMovie] = useState({})

  useEffect(() => {
    const getMovie = async ()=> {
      try {
        const res = await newRequest.get(`/movies/find/${item}`)
        setMovie(res.data)
      
      } catch (error) {
        console.log(error)
    } 
  } 
  getMovie()
  }, [item])

    console.log(movie)


  return (
    <Link to="/watch" state={{movie}}>
    {/* <Link to={{pathname: "/watch", movit:movie}}> */}
    
      <div className="listItem" style={{left: isHovered && index * 225 - 50 + index * 2.5}} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <img src={movie.img} alt="" />
      {
        isHovered && (
      <>
          <video src={movie.trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon"/>
              <ThumbUpAltOutlined className="icon"/>
              <ThumbDownAltOutlined className="icon"/>
            </div>
            <div className="itemInfoTop">
              <span>{movie.duration}</span>
              <span className="limit">+{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            <div className="desc">
              {movie.desc}
            </div>
            <div className="genre">{movie.genre}</div>
          </div>
      </>
        )
        }
      </div>
    </Link>
  )
}

export default ListItem