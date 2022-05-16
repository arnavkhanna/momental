import { render } from '@testing-library/react';
import { Form, Input, Button, Checkbox, Rate } from 'antd';
import React, { useState } from 'react';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import NavBar from 'C:/Users/Owner/Desktop/Momental/momental/frontend/src/components/NavBar';
import "./style.css";

const current = new Date();
const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};


const Recording = () => {

  return(
    <>
    <NavBar/>
    <div className='post-form'>
      <h2>Post a Moment</h2>
      <form>
      <button>Record</button>
        <label>Title:</label>
        <input
        type="text"
        required
        />
        <label>Date: {date} </label>
        <label>Description:</label>
        <input
        type="text"
        required
        />
        <label>Mood:</label>
        <select>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
        </select>

        <label> Mood: </label>
          <>
            <Rate defaultValue={3} character={({ index }) => customIcons[index + 1]} />
          </>

        <button>Finalize</button>
      </form>
      
    </div>
    </>
  );
};


export default Recording;