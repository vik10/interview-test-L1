import { createSlice } from "@reduxjs/toolkit";

const HomeSlice = createSlice({
  name: "HomeSlice",
  initialState: {
    userDataArr: [
      {
        name: "Daniel Smith",
        id: 1,
        thought:
          "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
        imgUrl:
          "https://m.media-amazon.com/images/M/MV5BZmE0NzNiNzQtYTVlYS00MjljLWE4MTgtYzYxNjU2NjZkM2M4XkEyXkFqcGdeQXVyNjY5NDgzNjQ@._V1_.jpg",
      },
    ],
    gifUrl: "",
  },
  reducers: {
    handleGifDetail: (state, action) => {
      state.gifUrl = action.payload;
    },
    handleTextAreaVal: (state, action) => {
      state.userDataArr.push({ imgUrl: state.gifUrl, thought: action.payload });
    },
  },
});

export const { handleGifDetail, handleTextAreaVal } = HomeSlice.actions;

export default HomeSlice.reducer;
