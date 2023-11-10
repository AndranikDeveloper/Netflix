import React, { useState } from 'react';
import './style.css';
import { handleOnChange } from './search-services';
import { useAppSelector } from '../../hooks/hooks';
import { useDispatch } from 'react-redux';

const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const { searchValue } = useAppSelector((state) => state.moviesReducer);
  return (
    <div className='search'>
      <div className='search-content'>
        <input
          type='text'
          className='search-input'
          value={searchValue}
          onChange={(e) =>
            handleOnChange(e, setInputValue, dispatch, inputValue)
          }
          placeholder='Search Movie'
        />
      </div>
    </div>
  );
};

export default Search;
