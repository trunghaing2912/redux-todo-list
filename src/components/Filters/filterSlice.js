// const initState = {
//   search: "",
//   status: "All",
//   priorities: [],
// };

// const filterReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "filter/searchFilterChange":
//       return {
//         ...state,
//         search: action.payload,
//       };

//     case "filter/statusFilterChange":
//       return {
//         ...state,
//         status: action.payload,
//       };

//     case "filter/prioritiesFilterChange":
//       return {
//         ...state,
//         priorities: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// export default filterReducer;

import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: "filters",
  initialState: { search: "", status: "All", priorities: [] },
  reducers: {
    searchFilterChange: (state, action) => {
      state.search = action.payload;
    },
    statusFilterChange: (state, action) => {
      state.status = action.payload;
    },
    prioritiesFilterChange: (state, action) => {
      state.priorities = action.payload;
    },
  },
});
