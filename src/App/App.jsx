import { hot } from 'react-hot-loader/root';
import React, { useState, useEffect } from 'react';
import './AppStyle.css';

function App() {
  const [stars, setStars] = useState([]);
  const [value, setValue] = useState(5);
  const [reversed, setReverse] = useState(false);
  const handleChange = e => {
    setValue(e.target.value);
  };
  useEffect(() => {
    const a = '*';
    let res = [];
    for (let i = 0; i < value; i++) {
      res[i] = a.repeat(value - i);
    }
    setStars(res);
  }, [value]);

  const handleClick = () => {
    setReverse(!reversed);
  };
  return (
    <>
      <input
        value={value}
        className="inpStars"
        onChange={e => {
          handleChange(e);
        }}
        type="number"
      />
      <>
        {stars.length ? (
          <ul className={`stars ${reversed}`}>
            {stars.map((star, key) => (
              <li key={key}>{star}</li>
            ))}
          </ul>
        ) : (
          <p className='noInput'>No input</p>
        )}
      </>
      <button className="revBtn" onClick={handleClick}>
        Reverse
      </button>
    </>
  );
}

export default hot(App);
