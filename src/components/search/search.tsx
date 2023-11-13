import React, { useState } from 'react';
import { handleOnChange } from './search-services';
import { useAppSelector } from '../../hooks/hooks';
import { useDispatch } from 'react-redux';
import {
  SearchContentTag,
  SearchInputTag,
  SearchTag,
} from '../styled-components/search-styles/search-styles';

const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const { searchValue } = useAppSelector((state) => state.moviesReducer);
  return (
    <SearchTag>
      <SearchContentTag>
        <SearchInputTag
          type='text'
          value={searchValue}
          onChange={(e) =>
            handleOnChange(e, setInputValue, dispatch, inputValue)
          }
          placeholder='Search Movie'
        />
      </SearchContentTag>
    </SearchTag>
  );
};

export default Search;
