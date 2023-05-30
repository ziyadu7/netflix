import React, { useContext, useEffect,useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import {apiKey,imageUrl} from '../../Constants/Constant'
import Youtube from 'react-youtube'
import { appContext } from '../../appContext'
function Banner() {
  const [movie,setMovie] = useState()
  const [urlId,setUrlId] = useState('')
  const {url,setUrl} = useContext(appContext)
  useEffect(()=>{
       axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&language=en-US`).then((response)=>{
        console.log(response.data.results[0]);
        // setIBanner(response.data.results)
        setMovie(response.data.results[ Math.floor(Math.random() * response.data.results.length-1)])
       })
  },[])

  // function setIBanner(result){
  //   setInterval(()=>{
  //     setMovie(result[ Math.floor(Math.random() * result.length-1)])
  //   },3000)
  // }

 function bannerVideo(id){
  axios.get(`/movie/${id}/videos?language=en-US&api_key=${apiKey}`).then((response)=>{
    if(response.data.results.length!=0){
      setUrlId(response.data.results[0])
    }else{
      alert('Video not available')
    }
 }).catch(err=>{
  alert('error'+err)
 })
  }
  const opts = {
    height: '500',
    width: '100%',
    playerVars: {
      autoplay: 1,
    }
  } 

  if(url){
    return (
      <div className='banner' style={{backgroundImage:`url(${url? imageUrl+url.backdrop_path:''})`}}>
          <div className='content'>
              <h1 className='title'>{url ? url.title:''}</h1>
              <div className='bannerButton'>
                  <button onClick={()=>{bannerVideo(url.id)
                    setUrl('')}} className='button'>Play</button>
                  <button className='button'>My list</button>
              </div>
              <h1 className='description'>{url? url.overview:''}</h1>
          </div>
          <div className='fade'></div>
      </div>
    )
  }

  if(urlId){
    return (
    <div className='trailer'>
    <Youtube videoId={urlId.key} opts={opts}/>
    </div>
    )
  }
    return (
      <div className='banner' style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path:''})`}}>
          <div className='content'>
              <h1 className='title'>{movie ? movie.title:''}</h1>
              <div className='bannerButton'>
                  <button onClick={()=>{bannerVideo(movie.id)}} className='button'>Play</button>
                  <button className='button'>My list</button>
              </div>
              <h1 className='description'>{movie ? movie.overview:''}</h1>
          </div>
          <div className='fade'></div>
      </div>
    )
}

export default Banner