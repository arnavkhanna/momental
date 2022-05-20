import { render } from '@testing-library/react';
import { Form, Input, Button, Checkbox, Rate } from 'antd';
import React, { useState } from 'react';
import NavBar from 'C:/Users/Owner/Desktop/Momental/momental/frontend/src/components/NavBar';
import "./style.css";

const current = new Date();
const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;


const Recording = () => {

  return(
    <>
    <NavBar/>
    <div className="top_middle">
                <h1 className="heading"> Recording </h1>
            </div>
            <div className="top_left" >
                 <h2 className="logo">Momental</h2>
            </div>
    <div className='post-form'>
      <h2>Post a Moment</h2>
      <form>
      <button>Record</button>
      <br></br>
      <br></br>
        <label>Title:  </label>
        <input
        type="text"
        required
        />
        <br></br>
        <br></br>
        <label>Date: {date} </label>
        <br></br>
        <br></br>
        <label>Description:  </label>
        <input
        type="text"
        required
        />
        <br></br>
        <br></br>
        <label> How are you feeling? : </label>
        <select>
          <option value={1}>1 (Bad)</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10 (Good) </option>
        </select>
          <br></br>
          <br></br>
        <button>Post</button>
      </form>
      
    </div>
    </>
  );
};


export default Recording;