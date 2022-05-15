import { render } from '@testing-library/react';
import { Form, Input, Button, Checkbox } from 'antd';
import { useState } from 'react';

const current = new Date();
const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;


const Recording = () => {

  return(
    <div className='form'>
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
        <button>Finalize</button>
      </form>
    </div>
  );
};


export default Recording;