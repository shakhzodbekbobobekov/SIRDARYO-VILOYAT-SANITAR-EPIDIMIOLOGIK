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
          {/* { */}
              {/* posts.map((post) => { */}
          {/* return */ }
                    <div className='news-card__item'>
                      <div className='news-card__boxImg'>
                          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5YrQimjeNiD7SwJ0UUV1qUnTO4HPaP-M0GQ&usqp=CAU' alt="images" />
                      </div>
                      <div className="context-text">
                          <h3>Lorem dolor sit bla bla</h3>
                          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error neque voluptatibus quibusdam perspiciatis incidunt architecto a quia eveniet et, laudantium rem soluta quaerat beatae. Magnam impedit voluptate dolores hic voluptatibus. </p>
                          <hr />
                            <div className='data'>
                                <span>1.1210.54</span>
                            </div>
                      </div>
                    </div>
              {/* }) */}
          {/* } */ }
          <div className='news-card__item'>
                      <div  className='news-card__boxImg'>
                          <img src='https://www.codegrepper.com/codeimages/javascript-set-image-src.png' alt="images" />
                      </div>
                      <div className="context-text">
                          <h3>Lorem dolor sit bla bla</h3>
                          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit lorem. Error neque voluptatibus quibusdam perspiciatis incidunt architecto a quia eveniet et, laudantium rem soluta quaerat beatae. Magnam impedit voluptate dolores hic voluptatibus. </p>
                          <hr />
                  <div className='data'>
                      <span>1.1210.54</span>
                          </div>
                      </div>
          </div>
          {/*  */}
          <div className='news-card__item'>
                      <div  className='news-card__boxImg'>
                          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5YrQimjeNiD7SwJ0UUV1qUnTO4HPaP-M0GQ&usqp=CAU' alt="images" />
                      </div>
                      <div className="context-text">
                          <h3>Lorem dolor sit bla bla</h3>
                          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error neque voluptatibus quibusdam perspiciatis incidunt architecto a quia eveniet et, laudantium rem soluta quaerat beatae. Magnam impedit voluptate dolores hic voluptatibus. </p>
                          <hr />
                  <div className='data'>
                      <span>1.1210.54</span>
                  </div>
                </div>
          </div>
           <div className='news-card__item'>
                      <div  className='news-card__boxImg'>
                          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5YrQimjeNiD7SwJ0UUV1qUnTO4HPaP-M0GQ&usqp=CAU' alt="images" />
                      </div>
                      <div className="context-text">
                          <h3>Lorem dolor sit bla bla</h3>
                          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error neque voluptatibus quibusdam perspiciatis incidunt architecto a quia eveniet et, laudantium rem soluta quaerat beatae. Magnam impedit voluptate dolores hic voluptatibus. </p>
                          <hr />
                  <div className='data'>
                      <span>1.1210.54</span>
                  </div>
                </div>
          </div>
           <div className='news-card__item'>
                      <div  className='news-card__boxImg'>
                          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5YrQimjeNiD7SwJ0UUV1qUnTO4HPaP-M0GQ&usqp=CAU' alt="images" />
                      </div>
                      <div className="context-text">
                          <h3>Lorem dolor sit bla bla</h3>
                          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error neque voluptatibus quibusdam perspiciatis incidunt architecto a quia eveniet et, laudantium rem soluta quaerat beatae. Magnam impedit voluptate dolores hic voluptatibus. </p>
                          <hr />
                  <div className='data'>
                      <span>1.1210.54</span>
                  </div>
                </div>
          </div>
           <div className='news-card__item'>
                      <div  className='news-card__boxImg'>
                          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5YrQimjeNiD7SwJ0UUV1qUnTO4HPaP-M0GQ&usqp=CAU' alt="images" />
                      </div>
                      <div className="context-text">
                          <h3>Lorem dolor sit bla bla</h3>
                          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error neque voluptatibus quibusdam perspiciatis incidunt architecto a quia eveniet et, laudantium rem soluta quaerat beatae. Magnam impedit voluptate dolores hic voluptatibus. </p>
                          <hr />
                  <div className='data'>
                      <span>1.1210.54</span>
                  </div>
                </div>
          </div>
           <div className='news-card__item'>
                      <div  className='news-card__boxImg'>
                          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5YrQimjeNiD7SwJ0UUV1qUnTO4HPaP-M0GQ&usqp=CAU' alt="images" />
                      </div>
                      <div className="context-text">
                          <h3>Lorem dolor sit bla bla</h3>
                          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error neque voluptatibus quibusdam perspiciatis incidunt architecto a quia eveniet et, laudantium rem soluta quaerat beatae. Magnam impedit voluptate dolores hic voluptatibus. </p>
                          <hr />
                  <div className='data'>
                      <span>1.1210.54</span>
                  </div>
                </div>
          </div>
    </div>
  )
}

export default Yangiliklar


