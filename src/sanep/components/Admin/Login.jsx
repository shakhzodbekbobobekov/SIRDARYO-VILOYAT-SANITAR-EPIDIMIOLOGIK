import React from "react";
import "./Login.scss";
import { useRef } from "react";
import Adminpanel from "./Adminpanel";
import { Button } from "@mui/material";
import axios from "axios";

const url = 'http://213.230.65.55:10';
const Login = () => {
  const inputRef = useRef();

  function islogidin() {
    if (inputRef.current.value === "") {
      alert(`Iltimos ma'lumotlarni to'ldiring`);
    } else {
      alert("rahmat oppoq yol");
      return <Adminpanel />;
    }
  }

  const signInBtn = () => {
    const formData = new FormData(document.getElementById('handleForm'))
    axios({
      url: url + '/login/signIn',
      method: "POST",
      data: {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value.toString()
      },
       headers: {"Content-Type":"Application/JSON"}
    }).then((data) => {
     window.location = '/admin'

    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className="wrapper">
      <form className="form" id='handleForm'>
        <input
          ref={inputRef}
          className="form__input"
          type="email"
          placeholder="email"
          name='email'
          autoComplete="off"
          id="email"
        />
        <input
          ref={inputRef}
          className="form__input"
          type="password"
          placeholder="password"
          name="password"
          id="password"
        />
        <Button
          type="button"
          variant="contained"
          className="form__btn"
          onClick={signInBtn}
        >
          Log in
        </Button>
      </form>
    </div>
  );
};

export default Login;
