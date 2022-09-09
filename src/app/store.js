import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";
import { userReducer } from '../services/userSlice'
import { messageReducer } from '../services/messageSlice'

export default configureStore ({
    reducer: {
        [cryptoApi.reducerPath] : cryptoApi.reducer,
        [cryptoNewsApi.reducerPath] : cryptoNewsApi.reducer,
        [userReducer.reducerPath] : userReducer.reducer,
        [messageReducer.reducerPath]: messageReducer.reducer,
    },
})