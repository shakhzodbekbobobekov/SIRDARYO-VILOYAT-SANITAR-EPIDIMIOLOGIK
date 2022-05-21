import React from "react";
import "./Admin.scss";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Adminpanel = () => {
  return (
    <>
      <div className="inner">
        <div className="card">
          <div className="btns">
            <Link to="/admin" className="btn yozish" variant="contained">
              Post Yozish
            </Link>
            <Button className="btn" variant="outlined" color="error">
              Post O'CHIRISH
            </Button>
          </div>
        </div>
        <div className="form__card">
          <form className="post__ochirish-form">
            <input
              required
              className="inner__input"
              type="text"
              placeholder="Post ID sini kiriting"
            />
            <Button
              className="submit__id"
              type="Submit"
              size="medium"
              variant="contained"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Adminpanel;
