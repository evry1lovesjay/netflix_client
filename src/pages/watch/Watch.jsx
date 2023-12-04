import { ArrowBackOutlined } from "@mui/icons-material"
import "./Watch.scss"
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Watch = () => {

  const location = useLocation()
  const movie = location.state?.movie

  console.log(location)
  console.log(movie)

  // console.log(movie)

  return (
    
    <div className="watch">
      <Link to="/">
        <div className="back">
            <ArrowBackOutlined/>
            Home
        </div>
      </Link>
        <video src="https://www.daytrit.com/video1.d88272ca.mp4" className="video" autoPlay controls />
        {/* <video src="https://player.vimeo.com/video/783455041?h=aeff27094b" className="video" autoPlay controls /> */}
    </div>
  )
}
 
export default Watch