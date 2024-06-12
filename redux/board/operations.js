import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://taskpro-api-nmqb.onrender.com",
});

export const fetchBoards = createAsyncThunk(
  "boards/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/boards");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addBoard = createAsyncThunk(
  "boards/addBoard",
  async (newBoard, thunkAPI) => {
    try {
      const response = await axios.post("/boards", newBoard);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteBoard = createAsyncThunk(
  "boards/deleteBoard",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/boards/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editBoard = createAsyncThunk(
  "boards/editBoard",
  async (data, thunkApi) => {
    try {
      const response = await instance.put("boards/:boardId");
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
