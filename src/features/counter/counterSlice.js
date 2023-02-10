import { createSlice } from "@reduxjs/toolkit";
import useAxios from "../api.js/axios";

export const counterSlice = createSlice({
  name: "global",
  initialState: {
    page: "home",
    darkMode: false,
    lang: "en",
    menuOpen: false,
    massageBox: {
      exist: false,
      massage: "",
    },
    bgMode:"resume"
  },
  reducers: {
    pageToggle: (state, action) => {
      state.page = action.payload;
    },
    darkModeToggle: (state) => {
      state.darkMode = !state.darkMode;
    },
    langToggle: (state) => {
      state.lang = state.lang === "en" ? "fa" : "en";
    },
    menuOpenToggle: (state, action) => {
      if (action.payload === "toggle") {
        state.menuOpen = !state.menuOpen;
      } else if (action.payload === true || action.payload === false) {
        state.menuOpen = action.payload;
      }
    },
    massageBoxHandle: (state, action) => {
      state.massageBox = action.payload;
    },
    setBgMode: (state, action)=>{
      state.bgMode = action.payload
    }
  },
});

export const actions = counterSlice.actions;

export default counterSlice.reducer;
