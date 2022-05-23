import React, { useState, useEffect } from "react";
import "./Admin.scss";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import FetchAdmin from "./FetchAdmin";
import axios from "axios";

const url = 'http://213.230.65.55:10';



const Adminpanel = () => {
  const [posts, setPosts] = useState([]);
  // const [ openPost, setOpenPost ] = useState({_id: null, caption: null, description: null, imageId: null})
 
 const updateAllData =  (function(){
  fetch(url+"/posts")
    .then(res => {
      return res.json();
  })
    .then(data => {
      if (typeof data == "Array") {
      return setPosts(data)  
      } else {
        window.alert(data.message)
        window.location = data.redirect;
      }
      
    })
  .catch(e=>{console.log(e)})
  .finally(()=>{
    console.log("posts", posts)
  })
})

  useEffect(updateAllData, [])

// function bazaUpdate() {
//   "updateTheme" = posts._id,
//   "updateTheme" = posts.caption
//   "updateBody" = posts.description"

  const handleSumbit = (e) => {
    e.preventDefault()
    const formData = new FormData(document.getElementById('formOne'))
    axios({
      url: url + "/posts/add",
      method: "POST",
      data: formData,
      headers: {"Content-Type":"Application/JSON"}
    }).then((data) => {
      setPosts((post)=>{return [...post, data.data]})
    })
      .catch((err) => {
        if (err.response) {
      return alert('Xatolik boldi ' + err.response.data.message)
        }
        alert('Xato bor ' + err)
    })
  }
  
  const editBtn = () => {
    const formData = new FormData(document.getElementById('formOne'))
    formData.append('_id', document.getElementById("_id").value)
    axios({
      url: url + "/posts/update",
      method: "PUT",
      data: formData,
      headers: {"Content-Type":"Application/JSON"}
    }).then((data) => {
      // setPosts((post) => { return [...post, data.data] })
      console.log(data)
    })
      .catch((err) => {
        if (err.response) {
      return alert('Xatolik boldi ' + err.response.data.message)
        }
        alert('Xato bor ' + err)
    })
  }


  const postOpen = (_id) => {
    axios({
      url: url + "/posts/getPost/" + _id,
      method: "GET",
      responseType: "json"
    }).then((data) => {
      // setOpenPost((post)=>{return data.data})
      document.getElementById('_id').value = data.data._id      
      document.getElementById('caption').value = data.data.caption           
      document.getElementById('description').value = data.data.description           
      document.getElementById('postImage').src=url + "/posts/getImage/" + data.data.imageId 
    })
      .catch((err) => {
        if (err.response) {
      return alert('Xatolik boldi ' + err.response.data.message)
        }
        alert('Xato bor ' + err)
      })
    
  }
  
  const deleteFunc = (_id) => {
    axios({
      url: url + "/posts/delete/",
      method: "delete",
      data: {_id: document.getElementById('_id').value},
      headers: {"Content-Type":"Application/JSON"}
    }).then((data) => {
      updateAllData()
    })
  }

  return (
    <>
      <div className="inner">
        <div className="card">

          <div className="btns">
            <Link to="/admin" className="btn yozish">
              Post Yozish
            </Link>
          </div>

          <ul className="card__ul">
            {
              posts.map((user) => (
                <li variant="outlined" color="info" size="medium" key={ user._id } onClick={()=> postOpen(user._id) } >
                  <div className="user-img">
                    <img src={ url + "/posts/getImage/" + user.imageId } onError={ (e) => {
                      e.target.src = "https://www.pcfix.lt/wp-content/uploads/2019/10/default-user-image.png"
                    } } width='100' height='100' alt="no img" />
                  </div>
                  <div className="user-about">
                    <div className="description">
                      { user.description }
                    </div>
                    <div className="user-about__date">19.05.2022</div>
                  </div>
                </ li>
              ))
            }
          </ul>
        </div>
  
        <div className="form__card">
          <form id="formOne" onSubmit={handleSumbit} className="inner__form" encType="multipart/form-data" >
            <div className="inner__form__context">
              <div className="form__img-box">
                <img id="postImage" width='300' height='300'  onError={ (e) => {
                      e.target.src = "https://www.pcfix.lt/wp-content/uploads/2019/10/default-user-image.png"
                    } } alt="" />
                <input onChange={(e) => {
                 document.getElementById('postImage').src=(URL.createObjectURL(e.target.files[0]))
                }} name='postImage' className="form__img__span" required type="file" accept="image/jpeg" />
                {/* <span className="form__img__span">Rasm quyish</span> */}
              </div>

              <div className="form__section">
                 <input className="form-inputs placeholder" id="_id"  /* defaultValue={openPost._id} */ />

              <div className="form-data">
                
                <div className="form-data__textarea" >
                  <input
                    required
                    id="caption"
                    className="form-inputs addPending"
                    type="text"
                    name="caption"
                    placeholder="Post sarlavhasini kiriting"
                    autoComplete='off'
                  />
                </div>
                
                <div className='form-data__data' >
                  <input className=" form-inputs addPending" type="date"  />
                  
                </div>
                
              </div>
              
              <div className="form-textarea">
                  <textarea
                className="form-inputs"
                id="description"
                cols="40"
                rows="5"
                  placeholder="Post matnini kiriting"
                    name="description"
              ></textarea>
            </div>
               </div>
            </div>
            <div className="gruop-btn">
              <Button
                className="inerbtn"
                type="Submit"
                size="medium"
                variant="contained"
              >
                Submit
              </Button>
              <Button
                className="inerbtn"
                size="medium"
                variant="contained"
                onClick={editBtn}
              >
                Edit
              </Button>
              <Button onClick={deleteFunc}
                className="inerbtn"
                size="medium"
                variant="contained"
              >
                Delete
              </Button>
              </div>
          </form>
          {/* <FetchAdmin /> */}
        </div>
      </div>
    </>
  );
};

export default Adminpanel;

