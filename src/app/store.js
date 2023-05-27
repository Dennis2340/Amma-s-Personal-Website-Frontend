import { configureStore } from "@reduxjs/toolkit";
import poemReducer from "../appfeatures/poems/poemSlice";
import storyReducer from "../appfeatures/stories/storySlice";
import articleReducer from "../appfeatures/articles/articleSlice"
import motmsgReducer from "../appfeatures/motivationalmsg/motmsgSlice"
import videoReducer from "../appfeatures/videos/videoSlice"
const store = configureStore({
    reducer: {
     poems : poemReducer,
     stories: storyReducer,
     articles: articleReducer,
     motmessages: motmsgReducer,
     videos: videoReducer
    }
})

export default store