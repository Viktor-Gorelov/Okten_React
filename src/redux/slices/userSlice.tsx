import {IUser} from "../../model/IUser";
import {createAsyncThunk, createSlice, isFulfilled, isRejected, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {userService} from "../../services/userService";

type UserSliceType ={
    users: IUser[];
    user: IUser | null;
    isLoaded: boolean;
}

const userInitState: UserSliceType ={
    users:[],
    user: null,
    isLoaded: false
}

const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_:void,thunkAPI) =>{
        try {
            const users = await userService.getAll();
            thunkAPI.dispatch(userActions.changeLoadState(true));
            return thunkAPI.fulfillWithValue(users);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
)

const loadUsersById = createAsyncThunk(
    'userSlice/loadUsersById',
    async (id:string | undefined,thunkAPI) => {
        if(id){
            try {
                const user = await userService.getById(id);
                return thunkAPI.fulfillWithValue(user);

            } catch (e) {
                const error = e as AxiosError;
                return thunkAPI.rejectWithValue(error.response?.data);
            }
        }
        return null
    }
)

export const userSlice = createSlice({
    name:'userSlice',
    initialState:userInitState,
    reducers:{
        changeLoadState:(state, action:PayloadAction<boolean>) =>{
            state.isLoaded = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(
                loadUsers.fulfilled,
                (state, action) =>{
                    state.users = action.payload;
                })
            .addCase(
                loadUsers.rejected,
                (state, action) =>{
                    //.....
                }
            )
            .addCase(
                loadUsersById.fulfilled,
                (state, action) =>{
                    state.user = action.payload;
                }
            )
            .addCase(
                loadUsersById.rejected,
                (state, action) =>{
                    //.....
                }
            )
            .addMatcher(isFulfilled(loadUsers, loadUsersById),
                (state, action) =>{
                state.isLoaded = true;
            })
            .addMatcher(isRejected(loadUsers, loadUsersById),
                (state, action) =>{
                //.....
                })
})
export const userActions = {
    ...userSlice.actions,
    loadUsers,
    loadUsersById
}