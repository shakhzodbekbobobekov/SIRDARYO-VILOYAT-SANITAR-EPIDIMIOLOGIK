import React, { Component, useEffect, useState } from 'react';
import './Style/Yangiliklar.scss'
import axios from "axios";
const url = 'http://213.230.65.55:10';


function Yangiliklar() {    
    const [posts, setPosts] = useState([]);

 const updateAllData =  (function(){
  axios({
    url: url + "/posts",
    method: 'GET',
    responseType: "json"
  })
  .then(data=>{
      setPosts(()=>{return data.data});
      
  })
  .catch(e=>{
    console.log(e);
  })
})

  useEffect(updateAllData, [])
console.log(posts)
  return (
      <div className='news-card'>
          {
              posts.map((post) => {
           return <div className='news-card__item'>
                      <div className='news-card__boxImg'>
                          <img src={post.imageId} alt="images" />
                      </div>
                      <div className="context-text">
                   <h3>{post.caption }</h3>
                   <p> { post.description}</p>
                          <hr />
                            <div className='data'>
                                <span>1.1210.54</span>
                            </div>
                      </div>
                    </div>
            })
          } 
         
    </div>
  )
}

export default Yangiliklar


