import React from 'react'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl,apiKey} from '../../Constants/Constant'
import {useEffect,useState, useContext} from 'react'
import Youtube from 'react-youtube'
import { appContext } from '../../appContext'
function RowPost(props) {
  const [movies,setMovies] = useState([])
  // const [urlId,setUrlId] = useState('')
  const {url,setUrl} = useContext(appContext)
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log(response.data.results[0]);
      setMovies(response.data.results)
    }).catch(err=>{
      alert('network error'+err)
    })
  },[])
  // const opts = {
  //   height: '390',
  //   width: '100%',
  //   playerVars: {
  //     autoplay: 1,
  //   }
  // }
  // const handleMovie = (id)=>{
  //    axios.get(`/movie/${id}/videos?language=en-US&api_key=${apiKey}`).then((response)=>{
  //       if(response.data.results.length!=0){
  //         setUrlId(response.data.results[0])
  //       }else{
  //         alert('Video not available')
  //       }
  //    }).catch(err=>{
  //     alert('error'+err)
  //    })
  // }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>
            <img onClick={()=>{
              // handleMovie(obj.id)
              setUrl(obj)
            }} className={props.isSmall ? 'smallPoster': 'poster'} src={`${imageUrl+obj.backdrop_path}`}></img>
          )}
        </div>
        {/* { urlId && <Youtube videoId={urlId.key} opts={opts}/>} */}
    </div>
  )
}

export default RowPost