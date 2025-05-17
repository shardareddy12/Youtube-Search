import { useCallback, useEffect, useMemo, useState } from 'react'
import './App.css'
import Searchbar from './Components/Searchbar'
import VideoItem from './Components/VideoItem'
import VideoList from './Components/VideoList'

function App() {
  const [videos, setVideos] = useState([])
  const [searchTerm, setSearchTerm] =useState('React Tutorials')

  const apiUrl = useMemo(()=> `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchTerm}&key=youtube-key`,[searchTerm])

  const fetchVideos = useCallback(async()=>{
    try{
      const res = await fetch(apiUrl);
      const data = await res.json();
      setVideos(data.items || [])
    }
    catch(error){
      console.log("Error fetching videos:", error);
    }
  },[apiUrl])

  useEffect(()=>{
    fetchVideos();
  },[fetchVideos])

  return (
    <div className='App'>
      <h1>Youtube Video Search</h1>
      <Searchbar onSearch={setSearchTerm} />
      <VideoList videos={videos}/>
    </div>
  )
}

export default App
