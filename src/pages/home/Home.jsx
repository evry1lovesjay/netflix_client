import "./Home.scss"
import Navbar from "../../components/navbar/Navbar"
import Featured from "../../components/featured/Featured"
import List from "../../components/list/List"
import { useEffect, useState } from "react"
import newRequest from "../../utils/newRequest"

const Home = ({type}) => {

  const [lists, setLists] = useState([])
  const [genre, setGenre] = useState(null)

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await newRequest.get(`lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`)
        setLists(res.data)
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
    getRandomLists()
  }, [type, genre])

  return (
    <div className="home">
      <Navbar />
      <Featured type={type}/>
      {lists.map(list => 
        <List key={list._id} list={list}/>)
      }
    </div>
  )
}

export default Home