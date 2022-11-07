import { createSlice } from "@reduxjs/toolkit";
import vocabulary from "../vocabulary.json";
import mix_words from "../mix_words";


export const typingSpeedSlice = createSlice({
  name: "typingSpeed",
  initialState: {
    vocabulary: mix_words(vocabulary.words),
    lang: ["english", "spanish", "italian"],
    selectedLanguage: "english",
    inputText: "",
    correctWord: 0,
    wrongWord: 0,
    wordIndex: 0,
    time: 60,
    start: false,
    timer: '',
    correctedCharactersPerMinute: 0,
    correctEntries: 0,
    unCorrectEntries: 0,
    charIndex: 0,
    correctEntriesOfCorrectWords: 0,
    uncorrectWords: [{ wordToDigit: '', wrongWord: '' }]
  },
  reducers: {
    setDecreaseTime: (state) => {
      state.time--;
    },
    setSelectedLanguage: (state, action) => {
      const langFind = state.lang.find((item) => item === action.payload);
      state.selectedLanguage = langFind!;
    },
    setGameStart: (state) => {
      state.start = true;
      state.timer = new Date().toString()
    },
    setInputText: (state, action) => {
      const text = action.payload.trim();

      if (text) {
        state.inputText = action.payload;
      } else {
        state.inputText = "";
      }
    },
    setSpacePress: (state) => {

      const currentText = state.vocabulary[state.wordIndex];
      if (
        state.inputText.trim() === currentText.english ||
        state.inputText.trim() === currentText.spanish ||
        state.inputText.trim() === currentText.italian
      ) {
        state.correctWord++;
        state.correctEntriesOfCorrectWords += state.vocabulary[state.wordIndex][state.selectedLanguage].length;
        currentText.status = "correct";
      } else {
        state.wrongWord++;
        currentText.status = "wrong";
        state.uncorrectWords.push({
          wrongWord: state.inputText.trim(),
          wordToDigit: state.vocabulary[state.wordIndex][state.selectedLanguage]
        });
      }
      state.wordIndex++;
      state.inputText = "";
      state.charIndex = 0;
    },
    setCharPress: (state, action) => {

      const current = state.vocabulary[state.wordIndex];
      const currentChar = current[state.selectedLanguage][state.charIndex];

      const charPress = action.payload.trim();

      if (charPress === currentChar) {
        state.correctEntries++;
        state.charIndex++;
      } else if (charPress === 'Backspace') {
        if (state.inputText.trim() !== '') {
          state.charIndex--;
        }
      }
      else {
        state.charIndex++;
        state.unCorrectEntries++;
      }

    },
    setReplay: () => {
      window.location.reload();
    }
  },
});

export const {
  setSelectedLanguage,
  setInputText,
  setSpacePress,
  setCharPress,
  setReplay,
  setDecreaseTime,
  setGameStart
} = typingSpeedSlice.actions;

export default typingSpeedSlice.reducer;
