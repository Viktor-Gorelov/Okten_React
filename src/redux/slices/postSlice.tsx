import {IPost} from "../../model/IPost";
import {createAsyncThunk, createSlice, isFulfilled, isRejected, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {postService} from "../../services/postService";

type PostSliceType ={
    posts:IPost[];
    post:IPost | null;
    isLoaded:boolean;
}

const postInitState:PostSliceType ={
    posts:[],
    post:null,
    isLoaded:false
}

const loadPosts = createAsyncThunk(
    'postSlice/loadPosts',
    async (_:void,thunkAPI) =>{
        try {
            const posts = await postService.getAll();
            thunkAPI.dispatch(postActions.changeLoadState(true));
            return thunkAPI.fulfillWithValue(posts);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
)

const loadPostsById = createAsyncThunk(
    'postSlice/loadUsersById',
    async (id:string | undefined, thunkAPI) =>{
        if (id){
            try {
                const post = await postService.getById(id);
                return thunkAPI.fulfillWithValue(post);
            } catch (e) {
                const error = e as AxiosError;
                return thunkAPI.rejectWithValue(error.response?.data);
            }
        }
        return null
    }
)

export const postSlice = createSlice({
    name:'postSlice',
    initialState:postInitState,
    reducers:{
        changeLoadState:(state, action:PayloadAction<boolean>) =>{
            state.isLoaded = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadPosts.fulfilled,
                (state, action) =>{
                state.posts = action.payload;
                })
            .addCase(loadPosts.rejected,
                (state, action) =>{
                //.....
                })
            .addCase(loadPostsById.fulfilled,
                (state, action) =>{
                state.post = action.payload;
                })
            .addMatcher(isFulfilled(loadPosts,loadPostsById),
                (state, action) =>{
                state.isLoaded = true;
                })
            .addMatcher(isRejected(loadPosts,loadPostsById),
                (state, action) =>{
                    //.....
                })
})

export const postActions ={
    ...postSlice.actions,
    loadPosts,
    loadPostsById
}