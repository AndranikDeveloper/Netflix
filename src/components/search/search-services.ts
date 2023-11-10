import { handleOnChangeValue } from '../../store/moviesSlice';
import { AppDispatch } from '../../store/store';

export function handleOnChange(
  e: React.ChangeEvent<HTMLInputElement>,
  setInputValue: (value: string) => void,
  dispatch: AppDispatch,
  inputValue: string
) {
  setInputValue(e.target.value);
  dispatch(handleOnChangeValue(e.target.value));
}
