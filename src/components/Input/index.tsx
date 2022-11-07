import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setInputText,
  setSpacePress,
  setCharPress,
  setDecreaseTime,
  setGameStart,
} from "../../redux/typingSpeedSlice";
import { RootState } from '../../redux/store';

function Input() {
  const dispatch = useDispatch();

  const inputText = useSelector((state: RootState) => state.typingSpeed.inputText);
  const start = useSelector((state: RootState) => state.typingSpeed.start);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputText(e.target.value));

    if (!start) {
      dispatch(setDecreaseTime());
      dispatch(setGameStart());
    }
  };

  const handleKeyPress = (e: any) => {
    if (e.keyCode === 32 && inputText) {
      dispatch(setSpacePress());
    }
    else if (e.keyCode === 8 || e.keyCode === 46) {
      e.preventDefault();
    }
    else if (/^[a-z0-9]$/i.test(e.key)) {
      dispatch(setCharPress(e.key));
    }
  };

  return (
    <div className="flex items-center justify-center mt-12">
      <input
        type="text"
        placeholder="typing..."
        className="border-indigo-300 border-4 border-solid rounded-md w-1/3 h-20 p-3"
        value={inputText}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
}

export default Input;
