import React from "react";
import "./Login.scss";
import { useRef } from "react";
import Adminpanel from "./Adminpanel";
import { Button } from "@mui/material";

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

  return (
    <div className="wrapper">
      <form className="form">
        <input
          ref={inputRef}
          className="form__input"
          type="password"
          placeholder="password"
        />
        <input
          ref={inputRef}
          className="form__input"
          type="text"
          placeholder="Email"
        />
        <Button
          onClick={(e) => {
            e.preventDefault();
            islogidin();
          }}
          to={"/admin"}
          variant="contained"
          className="form__btn"
        >
          Log in
        </Button>
      </form>
    </div>
  );
};

export default Login;
